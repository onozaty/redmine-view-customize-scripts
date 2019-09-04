/*
Path pattern: .*
Insertion position: Bottom of issue form(チケット入力欄の下)
Type: JavaScript

プロジェクトを変更したら、強制的に担当者を変更する
*/
$(function() {

  $('#all_attributes').on('change', '#issue_project_id', function(e) {

    switch($('#issue_project_id').val()) {
      case '1':
        $('#issue_assigned_to_id').val('6');
        break;

      case '2':
        $('#issue_assigned_to_id').val('7');
        break;

      case '3':
        $('#issue_assigned_to_id').val('8');
        break;
    }
  });
})
