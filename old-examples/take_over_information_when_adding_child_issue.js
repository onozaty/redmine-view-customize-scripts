/*
Path pattern: .*
Insertion position: Bottom of issue detail(チケット詳細の下)
Type: JavaScript

子チケット作成時に親チケットのSubjectと対象バージョンを引き継ぐ
*/
$(function() {

  var addLink = $('#issue_tree a[href*="/issues/new"]')[0]; 

  var subject = $('#issue_subject').val();
  if (subject) {
    addLink.href += '&issue%5Bsubject%5D=' + encodeURIComponent(subject);
  }

  var version = $('#issue_fixed_version_id').val();
  if (version) {
    addLink.href += '&issue%5Bfixed_version_id%5D=' + version;
  }
})
