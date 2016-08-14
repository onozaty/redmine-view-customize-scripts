/*
Path pattern: .*
Type: JavaScript

新しいチケットタブを追加
*/
$(function() {
  var newIssueSub = $('.menu-children a.new-issue-sub');

  if (newIssueSub.size() == 1) {

    $('#main-menu > ul > li > a.issues').parent()
      .after($('<li>').append(newIssueSub.clone().attr('class', 'new-issue')));

    if (location.pathname == newIssueSub.attr('href')) {
      // 新しいチケットに選択を切り替え
      $('#main-menu > ul > li > a.issues').removeClass('selected');
      $('#main-menu > ul > li > a.new-issue').addClass('selected');
    }
  }
});
