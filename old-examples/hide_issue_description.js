/*
Path pattern: /issues
Type: JavaScript
説明を非表示に
*/
$(function() {
  $('#issue_description_and_toolbar').parent().hide();
  $('div.issue div.description').hide()
    .next('hr').hide();
});
