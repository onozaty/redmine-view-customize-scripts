/*
Path pattern: /issues$
Type: JavaScript
チケット一覧のコンテキストメニューからステータスを切り替えた際に、バージョンも変更する
*/
$(function() {

  // コンテキストメニューを表示したタイミングでフックするために
  // jQueryのshow関数を差し替え
  jQuery.fn._show = jQuery.fn.show;

  jQuery.fn.show = function() {
    if (this.attr('id') == 'context-menu') {
      // ステータスを6:却下に変える場合に
      // 対象バージョンを未設定に
      var a = $('#context-menu a[href*="status_id%5D=6"]');
      a.attr('href',a.attr('href') + '&issue%5Bfixed_version_id%5D=none');
    }

    return jQuery.fn._show.apply(this, arguments);
  };
});
