// チケット作成時にトラッカーに応じてデフォルト値を設定
//
// Path pattern: /issues/new$
// Type: JavaScript
$(function() {
  $('#all_attributes').change(function(e) {
    if (e.target.id == 'issue_tracker_id') {
      // トラッカーIDが変わった場合に初期値を切り替え
      setDefalutValue();
    }
  });

  var setDefalutValue = function() {
    // トラッカーに応じてデフォルト値を設定
    // 例: 予定工数を設定
    switch($('#issue_tracker_id').val()) {
      case '1':
        $('#issue_estimated_hours').val(2);
        break;

      case '2':
        $('#issue_estimated_hours').val(4);
        break;

      case '3':
        $('#issue_estimated_hours').val(1);
        break;
    }
  }

  // 現在選択されているものをもとに
  setDefalutValue();
});
