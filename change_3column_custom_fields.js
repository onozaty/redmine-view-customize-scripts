/*
Path pattern: .*
Insertion position: Bottom of issue form(チケット入力欄の下)
Type: JavaScript

カスタムフィールドを3列で表示する。
*/
$(function() {

  const field1 = $('#issue_custom_field_values_1');
  const field2 = $('#issue_custom_field_values_2');
  const field3 = $('#issue_custom_field_values_3');

  // Change layout
  const content = $('<div class="splitcontent">')
    .append($('<div class="splitcontentleft">').append(field1.parent()))
    .append($('<div class="splitcontentleft">').append(field2.parent()))
    .append($('<div class="splitcontentright">').append(field3.parent()));

  $('#attributes').append(content);
})
