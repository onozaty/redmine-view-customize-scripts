// チケット作成時にデフォルト値を設定
// (カスタムフィールドは、カスタムフィールドの設定でデフォルト値が指定できるので、
//  固定値入れるならばそちらでやったほうが良い)
// 
// Path pattern: /issues/new$
// Type: JavaScript
$(function() {

  // テキスト
  $('#issue_custom_field_values_1').val('テキスト');

  // セレクトボックス
  $('#issue_custom_field_values_2').val('1');

  // チェックボックス
  $('input[name="issue[custom_field_values][3][]"][value="1"]').prop('checked', true);

  // ラジオボタン
  $('input[name="issue[custom_field_values][4]"][value="2"]').prop('checked', true);
});
