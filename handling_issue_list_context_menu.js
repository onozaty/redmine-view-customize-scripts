/*
Path pattern: /issues/
Type: JavaScript
チケット一覧のコンテキストメニューでステータス変更を無効に
*/
$(function() {
  $(document)
    .on('click', '#context-menu a[href*="status_id%5D=6"]', function(event) {
      alert('コンテキストメニューからステータスを無効には出来ません。');
      return false;
    });
});
