/*
Path pattern: .*
Insertion position: Head of all pages(全てのページのヘッダ)
Type: JavaScript
クリップボードから画像貼り付け可能に
https://www.redmine.org/projects/redmine/repository/revisions/17874/diff/trunk/public/javascripts/attachments.js
*/
$(function() {

  $('form div.box').has('input:file.filedrop').on('paste', copyImageFromClipboard);

  function copyImageFromClipboard(e) {
    if (!$(e.target).hasClass('wiki-edit')) { return; }
    var clipboardData = e.clipboardData || e.originalEvent.clipboardData
    if (!clipboardData) { return; }
    var items = clipboardData.items
    for (var i = 0 ; i < items.length ; i++) {
      var item = items[i];
      if (item.type.indexOf("image") != -1) {
        var blob = item.getAsFile();
        var date = new Date();
        var filename = 'clipboard-'
          + date.getFullYear()
          + ('0'+(date.getMonth()+1)).slice(-2)
          + ('0'+date.getDate()).slice(-2)
          + ('0'+date.getHours()).slice(-2)
          + ('0'+date.getMinutes()).slice(-2)
          + '-' + randomKey(5).toLocaleLowerCase()
          + '.' + blob.name.split('.').pop();
        var file = new File([blob], filename, {type: blob.type});
        var inputEl = $('input:file.filedrop').first()
        handleFileDropEvent.target = e.target;
        addFile(inputEl, file, true);
      }
    }
  }
})
