/*
Path pattern: /issues/(new|[0-9]+/copy)
Type: JavaScript
チケット作成時に処理を行う
*/
$(function() {
  $('#issue-form').submit(function() {
    // タイトルの先頭にカスタムフィールドの値を埋め込む
    var subject = $('#issue_custom_field_values_1 option:selected').text() + ':' + $('#issue_subject').val();
    $('#issue_subject').val(subject);
  });
});
