/*
Path pattern: /issues$
Type: JavaScript
カスタムフィールドの値でチケット一覧のフォントをBoldに変える
*/
$(function() {
  $('table.issues td.cf_1')
    .filter(function() {
      return $(this).text() == 'A';
    })
    .parent()
    .css('font-weight', 'bold');
});
