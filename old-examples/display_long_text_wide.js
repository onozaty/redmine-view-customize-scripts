/*
Path pattern: /issues
Type: JavaScript
長いテキストを幅広く表示する
*/
$(function() {
  // 処理したいカスタムフィールドに応じて変更
  var customFieldId = 3;

  // 詳細表示エリア
  function changeDetailArea() {

    var target = $('div.cf_' + customFieldId + '.attribute');

    // 移動
    $('div.issue > div.attributes').append(
      $('<div>', { class: 'splitcontent' }).append(target));
  }

  // 編集エリア
  function changeEditArea() {

    var target = $('#issue_custom_field_values_' + customFieldId).parent();

    // 移動
    $('#attributes').append(target);
  }

  changeDetailArea();
  changeEditArea();

  // ステータス変更時などにDOMが差し替えられるので
  // フォームの内容が書き変わるたびに調整
  var _replaceIssueFormWith = replaceIssueFormWith;
  replaceIssueFormWith = function(html){

    _replaceIssueFormWith(html);

    changeDetailArea();
    changeEditArea();
  };
})
