/*
Insertion position: Bottom of issue form
Type: JavaScript

チェックされたらテキストを無効化
*/
$(function() {

  const checkbox = $('#issue_custom_field_values_1');
  const text = $('#issue_custom_field_values_2');

  function changeEnableText() {
    text.prop('disabled', checkbox.prop('checked'));
  }

  checkbox.on('change', changeEnableText);

  changeEnableText();
});
