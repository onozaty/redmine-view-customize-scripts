/*
Path pattern: .*
Insertion position: Bottom of issue form(チケット入力欄の下)
Type: JavaScript

ステータスを却下にしたときに、期日が未入力だったら今日の日付を入れる
*/
$(function() {

  $('#all_attributes').on('change', '#issue_status_id', function(e) {

    if ($('#issue_status_id').val() == '6' && $('#issue_due_date').val() == '') {
      var today = $.datepicker.formatDate('yy-mm-dd', new Date());
      $('#issue_due_date').val(today);
    }
  });
})
