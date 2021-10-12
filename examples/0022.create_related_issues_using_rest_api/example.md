# Create a related issues using the REST API

Create a related issues using the REST API.  
REST APIを使って関連するチケットを作成します。

This example will allow you to create predetermined related issues with a single button.  
この例では、あらかじめ定義した関連チケットをボタン1つで作成できるようにします。

## Setting

### Path Pattern

None

### Insert Position

Bottom of issue detail
<!-- 
Head of all pages
Bottom of issue form
Bottom of issue detail
Bottom of all pages
-->

### Code

JavaScript
<!--
JavaScript
CSS
HTML
-->

```javascript
$(function() {

  const trackerId = $('#issue_tracker_id').val();
  const subject = $('#issue_subject').val();
  const priorityId = $('#issue_priority_id').val();
  const currentIssueId =  ViewCustomize.context.issue.id;

  // Defining related issues
  const relatedIssues = [
    {
      'issue': {
        'tracker_id': trackerId,
        'subject': subject + ' - Related1',
        'priority_id': priorityId
      }
    },
    {
      'issue': {
        'tracker_id': trackerId,
        'subject': subject + ' - Related2',
        'priority_id': priorityId
      }
    },
    {
      'issue': {
        'tracker_id': trackerId,
        'subject': subject + ' - Related3',
        'priority_id': priorityId
      }
    }
  ];

  const link = $('<a title="Batch creation of related issues" class="icon icon-add" href="#">Batch creation of related issues</a>');
  $('#issue_tree').before($('<p>').append(link));

  link.on('click', function() {

    if (!confirm('Create a batch of related issues. Are you sure?')) {
      return;
    }

    // Execute the related issues creation process (asynchronous) sequentially and reload at the end.
    const defer = $.Deferred();
    let promise = defer.promise();

    for (let i = 0; i < relatedIssues.length; i++) {
      promise = promise.then(createIssue(relatedIssues[i]));
    }

    promise
      .done(function() {
        location.reload();
      })
      .fail(function() {
        alert('Failed');
      });

    defer.resolve();
  });

  function createIssue(issue) {

    return function() {

      return $.ajax({
        type: 'POST',
        url: '/projects/' + ViewCustomize.context.project.identifier + '/issues.json',
        headers: {
          'X-Redmine-API-Key': ViewCustomize.context.user.apiKey
        },
        contentType: 'application/json',
        data: JSON.stringify(issue)
      })
      .then(function(response) {
        const createdIssueId = response.issue.id;
        return $.ajax({
          type: 'POST',
          url: '/issues/' + currentIssueId + '/relations.json',
          headers: {
            'X-Redmine-API-Key': ViewCustomize.context.user.apiKey
          },
          dataType: 'json',
          contentType: 'application/json',
          data: JSON.stringify({
            'relation' : {
              'issue_to_id' : createdIssueId,
              'relation_type' : 'relates'
            }
          })
        })
      });

    };
  }
})
```

## Result

![result](./result.gif)

## Note

In this example, we will use REST API, so we need to "Enable REST web service" via REST in Redmine settings.  
この例ではREST APIを利用するので、Redmineの設定で"RESTによるWebサービス"を有効にしておく必要があります。

Also, an API key must have been created. For details on creating an API key, please refer to the following.  
また、APIキーが払い出されている必要もあります。APIキーの払い出しについては、下記を参考にしてください。

* https://github.com/onozaty/redmine-view-customize#api-access-key
