/*
Path pattern: .*
Insertion position: Bottom of issue detail(チケット詳細の下)
Type: JavaScript

子チケット作成ボタンにより、複数の子チケットをまとめて作成する
(REST APIを有効にしておく必要あり)
*/
$(function() {

  var projectId = $('#issue_project_id').val();
  var trackerId = $('#issue_tracker_id').val();
  var subject = $('#issue_subject').val();
  var priorityId = $('#issue_priority_id').val();
  var parentIssueId =  ViewCustomize.context.issue.id;

  // 子チケットとして作成する情報
  var issueChildren = [
    {
      'issue': {
        'project_id': projectId,
        'tracker_id': trackerId,
        'subject': subject + ' - 子チケット1',
        'priority_id': priorityId,
        'parent_issue_id': parentIssueId
      }
    },
    {
      'issue': {
        'project_id': projectId,
        'tracker_id': trackerId,
        'subject': subject + ' - 子チケット2',
        'priority_id': priorityId,
        'parent_issue_id': parentIssueId
      }
    },
    {
      'issue': {
        'project_id': projectId,
        'tracker_id': trackerId,
        'subject': subject + ' - 子チケット3',
        'priority_id': priorityId,
        'parent_issue_id': parentIssueId
      }
    }
  ];

  var link = $('<a title="子チケットの一括作成" class="icon icon-add" href="#">子チケットの一括作成</a>');
  $('#issue_tree').before($('<p>').append(link));

  link.on('click', function() {

    if (!confirm('子チケットをまとめて作成します。よろしいですか。')) {
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
        // 作成時はレスポンスのコンテンツが無く、jsonだとエラーとなるのでtextにしておく
        dataType: 'text',
        contentType: 'application/json',
        data: JSON.stringify(issue)
      });

    };
  }
})
