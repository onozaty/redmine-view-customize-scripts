/*
Path pattern: .*
Insertion position: Bottom of issue detail(チケット詳細の下)
Type: JavaScript

子チケット一覧に親子関係を外すアイコンを追加し、アイコン押下時にREST APIを使って
親チケットの情報をクリアする。
(REST APIを有効にしておく必要あり)
*/
$(function() {

  $('tr.child').each(function() {
    var target = $(this);

    // チケットIDを取得
    var issueUrl = target.find('td.subject > a').attr('href');
    var issueId = issueUrl .substr(issueUrl .lastIndexOf('/') + 1);

    // リンクを追加して、リンク押下時にチケットを更新
    var link = $('<a title="親子関係の削除" class="icon-only icon-link-break" href="#">親子関係の削除</a>');

    link.on('click', function() {

      if (!confirm('よろしいですか')) {
        return;
      }

      $.ajax({
          type: 'PUT',
          url: '/issues/' + issueId  + '.json',
          headers: {
            'X-Redmine-API-Key': ViewCustomize.context.user.apiKey
          },
          // 更新時はレスポンスのコンテンツが無く、jsonだとエラーとなるのでtextにしておく
          dataType: 'text',
          contentType: 'application/json',
          data: JSON.stringify({
            'issue': {
              'parent_issue_id': '' // 親チケットIDをクリア
            }
          })
      })
      .done(function(data) {
        // 成功したらリロード
        location.reload();
      })
      .fail(function(data) {
        alert('失敗しました');
      });

    });

    target.append($('<td class="buttons" style="padding: 0">').append(link));
  });
})
