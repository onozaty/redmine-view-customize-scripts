/*
Path pattern: /issues
Type: JavaScript
ステータスに応じて、カスタムフィールドの表示を切り替える
*/
$(function() {

  // 表示の切り替え
  var changeVisibility = function() {

    var visible = $('#issue_status_id').val() == '6';

    if (visible) {
      $('#issue_custom_field_values_1').parent().show();
      $('.cf_1').show();
    } else {
      $('#issue_custom_field_values_1').parent().hide();
      $('.cf_1').hide();
    }
  };

  // 現時点のもので表示切替
  changeVisibility();

  // ステータスが変わったタイミングで切り替え
  $('#all_attributes').on('change', '#issue_status_id', function(e) {
    changeVisibility();
  });

  // ステータス変更時などにDOMが差し替えられるので
  // フォームの内容が書き変わるたびに表示切替
  var _replaceIssueFormWith = replaceIssueFormWith;
  replaceIssueFormWith = function(html){

    _replaceIssueFormWith(html);

    changeVisibility();
  };
})
