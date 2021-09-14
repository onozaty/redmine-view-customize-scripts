/*
Insertion position: Bottom of issue form(チケット入力欄の下)
Type: JavaScript

ステータス毎に進捗率と担当者を変更する
*/
$(function () {

  const trackerElementId = 'issue_tracker_id';
  const statusElementId = 'issue_status_id';
  const doneRatioElementId = 'issue_done_ratio';
  const assigneeElementId = 'issue_assigned_to_id';

  const workerElementId = 'issue_custom_field_values_1';
  const reviewerElementId = 'issue_custom_field_values_2';

  // ステータスに応じた進捗率と担当者の情報
  const statusConditions = {
    // トラッカー毎に定義
    '4': {
      '7' : {done:  10, assignee: workerElementId},   // 担当                 :  10% / 作業者
      '8' : {done:  30, assignee: workerElementId},   // 作成中               :  30% / 作業者
      '10': {done:  50, assignee: reviewerElementId}, // レビュー待ち         :  50% / レビューア
      '11': {done:  70, assignee: workerElementId},   // レビュー結果反映待ち :  70% / 作業者
      '5' : {done: 100, assignee: workerElementId}    // 終了                 : 100% / 作業者
    }
  };

  $('#all_attributes').change(function(e) {

    const trackerCondtion = statusConditions[$('#' + trackerElementId).val()];
    if (trackerCondtion == null) {
      // 現在のトラッカーに対する設定が無い
      return null;
    }

    const statusCondition = trackerCondtion[$('#' + statusElementId).val()];
    if (statusCondition == null) {
      // ステータスに対する設定が無い
      return;
    }

    if (e.target.id == statusElementId) {
      // ステータスが変更された場合
      // 進捗と担当者を変更
      changeDone(statusCondition.done);
      changeAssignee(statusCondition.assignee);

    } else {
      // ステータス以外が変更された場合
      // 担当者の基にするフィールドが変わっていたら担当者を変える
      if (e.target.id == statusCondition.assignee) {
        changeAssignee(statusCondition.assignee);
      }
    }
  });

  function changeDone(doneRatio) {
    const currnetDoneRatio = parseInt($('#' + doneRatioElementId).val());
    if (currnetDoneRatio < doneRatio) {
      // 現在の進捗率が指定の進捗率より低いときは進捗率を変える
      // (進捗率を戻すことはしない)
      $('#' + doneRatioElementId).val(doneRatio);
    }
  }

  function changeAssignee(fromElementId) {
    const userId = $('#' + fromElementId).val();
    if (userId != '') {
      $('#' + assigneeElementId).val(userId);
    }
  }
});