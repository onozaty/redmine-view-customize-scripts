/*
Path pattern: .*
Insertion position: Bottom of issue detail
Type: JavaScript

期日まで残り3日になったらアラートを表示
*/
$(function() {

  const daysLeft = 3;

  const dueDateArray = $('#issue_due_date').val().split('-');
  const alertDate = new Date(dueDateArray[0], dueDateArray[1] - 1, dueDateArray[2] - daysLeft);

  const now = new Date();
  const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  if (nowDate >= alertDate) {
    $('#content').prepend('<div class="warning">It is only ' + daysLeft + ' days until the due date.</div>');
  }
})
