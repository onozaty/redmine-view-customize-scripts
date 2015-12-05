/*
Path pattern: /issues/
Type: JavaScript

チケット作成、編集時の項目名を変える
*/
$(function() {
  // チケットのSubjectの名前を変える
  $('label[for="issue_subject"]').text("環境名");

  // 必須マーク消さないようにするには、HTMLで書き換える
  //$('label[for="issue_subject"]').html('環境名<span class="required"> *</span>')
});
