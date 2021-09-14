/*
ユーザのグループでスクリプトを実行するかどうかを判定する
*/
$(function() {
  
  var isEnabled = ViewCustomize.context.user.groups.some(function(group) {
    return group.id == 5; // 有効にしたいグループのIDと比較
  });

  if (!isEnabled) {
    // 無効の場合は処理終了
    return;
  }

  // 以降実際に実行したいスクリプト
  console.log('execute script.');
});
