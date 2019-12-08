/*
Path pattern: .*
Insertion position: Bottom of issue form(チケット入力欄の下)
Type: JavaScript

プロジェクトを変更したら、ウォッチャーを変更する
*/
$(function() {

  var changeWatcher = function() {
    switch($('#issue_project_id').val()) {
      case '1':
        $('#issue_watcher_user_ids_1 input').prop('checked', true);
        break;

      case '2':
        $('#issue_watcher_user_ids_8 input').prop('checked', true);
        break;

      case '3':
        $('#issue_watcher_user_ids_9 input').prop('checked', true);
        break;
    }
  };

  document.getElementById('all_attributes').addEventListener(
    'change',
    function(e) {
      if (e.srcElement.id == 'issue_project_id') {
        // プロジェクト変更時のみ
        changeWatcher();
      }
    },
    true);
})
