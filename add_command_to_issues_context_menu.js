/*
Path pattern: /issues$
Type: JavaScript

チケット一覧のコンテキストメニューにコマンド(特定のURLに対するリクエスト)を追加します
*/
$(function() {

  // 対象のURI
  var commandUri = 'http://192.168.33.10/test';
  var commandTitle = 'コマンド実行';

  // コンテキストメニューを表示したタイミングでフックするために
  // jQueryのshow関数を差し替え
  jQuery.fn._show = jQuery.fn.show;

  jQuery.fn.show = function() {
    if (this.attr('id') == 'context-menu') {
      // コンテキストメニューを表示したタイミングでコマンドを追加
      var menu = $('<a>').text(commandTitle).click(function() {
        execute();
        return false;
      })

      this.children('ul').append($('<li>').append(menu));
    }

    return jQuery.fn._show.apply(this, arguments);
  };

  // コマンドの実処理
  var execute = function() {

    // チェックされているチケット番号を取得(複数存在する場合はカンマ区切り)
    var issues = $('input[name="ids[]"]:checked').map(function() { return $(this).val();}).get().join(',');

    // 対象のURIにチケット番号をパラメータとして送信
    $.ajax({
      type: 'GET',
      url: commandUri,
      data: 'issues=' + issues // チケット番号をパラメータとして
    }).done(function(data, textStatus, jqXHR){

      // 成功時の処理
      alert('成功しました。');

    }).fail(function(jqXHR, textStatus, errorThrown){

      // 失敗時の処理
      alert('失敗しました。 status:' + jqXHR.status);
    });

    contextMenuHide();
  };
});
