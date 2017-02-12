/*
Path pattern: .*
Type: JavaScript
Description: リポジトリタブでのデフォルトブランチを変更
*/
$(function() {
  var branchName = '3.3-stable';
  var baseUrl = $('a.repository').attr('href');
  
  $('a.repository').attr('href', baseUrl + '?rev=' + encodeURIComponent(branchName));
});
