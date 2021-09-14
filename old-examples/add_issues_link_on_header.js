/*
Path pattern: .*
Type: JavaScript

全てのチケット一覧リンクをヘッダに
*/
$(function() {
  $('#top-menu > ul')
    .append('<li><a href="/issues">全てのチケット</a></li>');
});
