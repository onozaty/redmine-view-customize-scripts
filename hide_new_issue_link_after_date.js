/*
Insertion position: Head of all pages
Type: JavaScript
*/
/* 特定の日以降は新規チケットのリンクを非表示に */
$(function() {

  const baseDate = new Date('2021-02-24 00:00:00');

  if (new Date() >= baseDate) {

    $("a.new-issue").hide();
  }
});
