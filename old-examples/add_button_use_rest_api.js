/*
Path pattern: /issues/[0-9]+$
Type: JavaScript

子チケット一覧に親子関係を外すボタンを追加し、ボタン押下時にREST APIを使って
親チケットの情報をクリアする
*/
$(function() {

  // REST APIのキー
  var apiKey = '払い出したAPIキー';

  // 子チケット一覧を対象に
  $('tr.child').each(function() {
    var target = $(this);

    // チケットIDを取得
    var issueUrl = target.find('td.subject > a').attr('href');
    var issueId = issueUrl .substr(issueUrl .lastIndexOf('/') + 1);

    // ボタンを追加して、ボタン押下時にチケットを更新
    var button = $('<input type="button" value="親子関係を外す">');
    button.on('click', function() {

      $.ajax({
          type: 'PUT',
          url: '/issues/' + issueId + '.json',
          headers: {
            'X-Redmine-API-Key': apiKey
          },
          // 更新時はレスポンスのコンテンツが無く
          // jsonだとエラーとなるのでtextにしておく
          dataType: 'text',
          contentType: 'application/json',
          data: JSON.stringify({
            'issue': {
              'parent_issue_id': '' // 親チケットIDをクリア
            }
          })
      }).done(function(data) {
        // 成功したらリロード
        location.reload();
      }).fail(function(data) {
        alert('失敗しました');
      });

    });

    target.append($('<td>').append(button));
  });
})
