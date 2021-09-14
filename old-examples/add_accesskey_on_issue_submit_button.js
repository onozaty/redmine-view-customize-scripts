/*
Path pattern: /issues
Type: JavaScript

チケット作成、編集画面の作成/送信ボタンにaccesskeyを追加する
*/
$(function() {
  $('#issue-form input[name="commit"]').attr('accesskey', 's');
});
