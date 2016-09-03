/*
Path pattern: /issues$
Type: JavaScript

チケット一覧の進捗欄で進捗の値を表示
*/
$(function() {
  $('table.progress').each(function() {
    var target = $(this);

    // classから進捗の値を取得(progress-値 となっている)
    var match = target.attr('class').match(/progress-([0-9]+)/);
    if (!match) {
      return;
    }

    // 値を追記して表示
    var value = match[1];
    target.after($('<p>').text(value));
  });
});
