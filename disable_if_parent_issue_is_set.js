/*
Insertion position: Bottom of issue form(チケット入力欄の下)
Type: JavaScript

親チケットIDが設定されていた場合に無効にする
*/
$(function() {

  const changeDisabled = function() {
    if ($('#issue_parent_issue_id').val() != '') {
      $('#issue_custom_field_values_1').prop('disabled', true);
    }
  }

  $('#issue_parent_issue_id').on('change', changeDisabled);

  changeDisabled();
});
