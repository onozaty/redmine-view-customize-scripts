// プロジェクト一覧の各プロジェクトへのリンク先を
// 概要ではなくチケット一覧となるように変更
//
// Path pattern: /projects/$
// Type: JavaScript
$(function() {
  // リンクの末尾に"/issues"を付与
  $('#projects-index a.project').each(function() {this.href += '/issues' });
})
