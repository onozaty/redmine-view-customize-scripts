/*
Insertion position: Bottom of issue form(チケット入力欄の下)
Type: JavaScript

ステータス変更時に担当者を変更する
*/
$(function () {

  const statusElementId = 'issue_status_id';
  const assigneeElementId = 'issue_assigned_to_id';
  const workerElementId = 'issue_custom_field_values_1';
  const reviewerElementId = 'issue_custom_field_values_2';

  // ステータスに応じて担当者を設定する元にする要素を定義
  const mapping = {
    '7' : workerElementId,   // 担当                 : 作業者
    '8' : workerElementId,   // 作成中               : 作業者
    '10': reviewerElementId, // レビュー待ち         : レビューア
    '11': workerElementId,   // レビュー結果反映待ち : 作業者
    '5' : workerElementId    // 終了                 : 作業者
  };

  $('#all_attributes').change(function(e) {
    if (e.target.id == statusElementId) {
      // ステータスが変更された場合
      fromElementId = mapping[$('#' + statusElementId).val()]
      if (fromElementId != null) {
        changeAssignee(fromElementId);
      }
    }
  });

  function changeAssignee(fromElementId) {
    const userId = $('#' + fromElementId).val();
    if (userId != '') {
      $('#' + assigneeElementId).val(userId);
    }
  }
});