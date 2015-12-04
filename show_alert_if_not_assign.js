/*
Path pattern: /issues/
Type: JavaScript

進行中にもかかわらず担当者が未設定の場合に警告を表示
*/
$(function() {
  $('#issue-form input[type="submit"]')
    .on('click', function(event) {
      var statusId = $('#issue_status_id').val();
      var assignedId = $('#issue_assigned_to_id').val();

      if (statusId == '2' && !assignedId) { // 2:進行中
        alert('進行中にもかかわらず担当者が設定されていません。');
        return false;
      }
    });
});
