/*
Path pattern: .*
Insertion position: Bottom of issue form(チケット入力欄の下)
Type: JavaScript
トラッカーの直後のカスタムフィールドを移動
*/
$(function() {

  // 対象のカスタムフィールドの要素を取得
  var customField = $('p:has(#issue_custom_field_values_1)');

  // トラッカーの後に移動
  $('p:has(#issue_tracker_id)')
    .after(
      $('<div class="splitcontent">')
        .append(
          $('<div class="splitcontentleft">').append(customField)));
})
