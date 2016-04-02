// カスタムフィールドを連動させる(親の値に応じて、子を絞り込む)
// 
// Path pattern: /issues/
// Type: JavaScript
$(function() {

  var parentFieldId = 'issue_custom_field_values_1';
  var childFieldId = 'issue_custom_field_values_2';

  // 表示条件
  var isTarget = function(child, parent) {
    // 前方一致のものを対象に
    return child.text().indexOf(parent.text()) == 0;
  }

  // 子フィールドの絞り込み
  var narrowChildField = function() {

    // 親で選択している項目
    var parentSelected = $('#' + parentFieldId + ' > option:selected');

    $('#' + childFieldId + ' > option').each(function() {

      var child = $(this);

      // 一致したものだけに絞り込む
      if (isTarget(child, parentSelected)) {
        child.show();
      } else {
        child.hide();
      }
    });
  }

  // 現時点のもので子を絞り込み
  narrowChildField();

  // 親フィールドが変わった際に子フィールドを絞り込み
  $('#all_attributes').change(function(e) {
    if (e.target.id == parentFieldId) {
      narrowChildField();
    }
  });

  // ステータス変更時などにDOMが差し替えられるので
  // フォームの内容が書き変わるたびに絞り込みを反映
  var _replaceIssueFormWith = replaceIssueFormWith;
  replaceIssueFormWith = function(html){

    _replaceIssueFormWith(html);

    narrowChildField();
  };
});
