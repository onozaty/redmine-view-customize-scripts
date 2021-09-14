/*
Insertion position: Head of all pages
Type: JavaScript

チケットタブでのデフォルトクエリを変更する
*/
$(function() {

  const issueMenuLink = $('#main-menu a[href$="/issues"]');
  issueMenuLink.attr('href', issueMenuLink.attr('href') + '?query_id=8');
})
