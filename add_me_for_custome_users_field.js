// カスタムフィールドのユーザ一覧にて、自分自身の項目を先頭に追加します
//
// Path pattern: /issues/
// Type: JavaScript
$(function() {
  var userUrl = $("div#loggedas a").attr("href");
  var userId = userUrl.substr(userUrl.lastIndexOf('/') + 1);

  var appendMe = function() {
    // ユーザ一覧のカスタムフィールドを取得
    $('select.user_cf').each(function() {
      // 自分自身の選択肢を取得
      var meOption = $(this).find('option[value="' + userId + '"]').first();

      // 複製し、空項目の次に名前を変えて挿入
      meOption.clone()
        .removeAttr('selected') // 2重に選択となってしまうので
        .insertAfter($(this).find('option[value=""]'))
        .text('<<me>>');
    });
  }

  appendMe();

  // ステータス変更時などにDOMが差し替えられるので
  // フォームの内容が書き変わるたびに絞り込みを反映
  var _replaceIssueFormWith = replaceIssueFormWith;
  replaceIssueFormWith = function(html){

    _replaceIssueFormWith(html);

    appendMe();
  };
});
