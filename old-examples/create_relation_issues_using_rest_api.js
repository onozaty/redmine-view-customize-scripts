/*
Path pattern: .*
Insertion position: Bottom of issue detail(チケット詳細の下)
Type: JavaScript

関連チケット作成ボタンにより、複数の関連チケットをまとめて作成する
(REST APIを有効にしておく必要あり)
*/
$(function() {

  var projectId = $('#issue_project_id').val();
  var trackerId = $('#issue_tracker_id').val();
  var subject = $('#issue_subject').val();
  var priorityId = $('#issue_priority_id').val();
  var currentIssueId =  ViewCustomize.context.issue.id;

  // 関連チケットとして作成する情報
  var issueChildren = [
    {
      'issue': {
        'project_id': projectId,
        'tracker_id': trackerId,
        'subject': subject + ' - 関連チケット1',
        'priority_id': priorityId
      }
    },
    {
      'issue': {
        'project_id': projectId,
        'tracker_id': trackerId,
        'subject': subject + ' - 関連チケット2',
        'priority_id': priorityId
      }
    },
    {
      'issue': {
        'project_id': projectId,
        'tracker_id': trackerId,
        'subject': subject + ' - 関連チケット3',
        'priority_id': priorityId
      }
    }
  ];

  var link = $('<a title="関連チケットの一括作成" class="icon icon-add" href="#">関連チケットの一括作成</a>');
  $('#issue_tree').before($('<p>').append(link));

  link.on('click', function() {

    if (!confirm('関連チケットをまとめて作成します。よろしいですか。')) {
      return;
    }

    // チケット作成処理(非同期)を順次実行し、最後にリロード
    var defer = $.Deferred();
    var promise = defer.promise();

    for (var i = 0; i < issueChildren.length; i++) {
      promise = promise.then(createIssue(issueChildren[i]));
    }

    promise
      .done(function() {
        // 成功したらリロード
        location.reload();
      })
      .fail(function() {
        alert('失敗しました');
      });

    defer.resolve();
  });

  function createIssue(issue) {

    return function() {

      return $.ajax({
        type: 'POST',
        url: '/issues.json',
        headers: {
          'X-Redmine-API-Key': ViewCustomize.context.user.apiKey
        },
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(issue)
      })
      .then(function(response) {
        var createdIssueId = response.issue.id;
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
      })
    };
  }
})
