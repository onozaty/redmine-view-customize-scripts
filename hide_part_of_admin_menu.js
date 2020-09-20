/*
Insertion position: Head of all pages
Type: JavaScript
*/
/* 特定ユーザに対して一部管理者メニューを非表示にする */
$(function() {

  // user_id = 10 に対して非表示に
  if (ViewCustomize.context.user.id == 10) {

    $('li:has(a[href="/workflows/edit"])').hide();  // Workflow
    $('li:has(a[href="/enumerations"])').hide();    // Enumerations
    $('li:has(a[href="/settings"])').hide();        // Settings
  }
});
