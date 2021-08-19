// チケット作成時にトラッカーに応じてデフォルト値を設定
//
// Insertion position: Bottom of issue form
// Type: JavaScript
$(function() {
  // トラッカーに応じてデフォルト値を設定
  // 例: 予定工数、担当者を設定
  switch($('#issue_tracker_id').val()) {
    case '1':
      $('#issue_estimated_hours').val('2');
      break;

    case '2':
      $('#issue_estimated_hours').val('4');
      $('#issue_assigned_to_id').val('1');
      break;

    case '3':
      $('#issue_estimated_hours').val('1');
      $('#issue_assigned_to_id').val('2');
      break;
  }
});
