/*
Path pattern: /issues
Type: JavaScript

カスタムフィールドを説明の後ろに移動
*/
$(function() {
  // 対象のカスタムフィールドの要素を取得
  var customField = $('.cf_2.attribute');

  // 説明の後に移動
  $('.description')
    .after(
      $('<div class="splitcontent">')
        .append(
          $('<div class="splitcontentleft">').append(customField)));
})
