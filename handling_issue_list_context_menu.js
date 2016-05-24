/*
Path pattern: /issues$
Type: JavaScript
チケット一覧のコンテキストメニューでステータス変更を無効に
*/
$(function() {
  var handler = function() {
    alert('コンテキストメニューからステータスを無効には出来ません。');
    return false;
  }

  $(document)
    .on('mouseover', '#context-menu a[href*="status_id%5D=6"]', function(event) {
      $(this)
        .attr('href', '#')
        .off('click', handler)
        .on('click', handler);
    });
});
