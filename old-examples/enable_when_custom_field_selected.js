/*
Path pattern: .*
Insertion position: Bottom of issue form(チケット入力欄の下)
Type: JavaScript

親のカスタムフィールドが選択されたら、子のカスタムフィールドも入力可能に
*/
$(function() {

  const parentField = $('#issue_custom_field_values_1');
  const childFields = [
    $('#issue_custom_field_values_2'),
    $('#issue_custom_field_values_3'),
    $('#issue_custom_field_values_4')
  ];

  const changeEnable = function() {

    if (parentField.val() != '') {
      childFields.forEach(function(child) {
        child.prop('disabled', false);
        child.css('background-color', '');
      });
    } else {
      childFields.forEach(function(child) {
        child.prop('disabled', true);
        child.css('background-color', '#ebebe4');
      });
    }
  }

  parentField.change(changeEnable);

  changeEnable();
})
