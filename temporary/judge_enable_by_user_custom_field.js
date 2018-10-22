/*
ユーザのカスタムフィールドによってスクリプトを実行するかどうかを判定する
*/
$(function() {
  
  var isEnabled = ViewCustomize.context.user.customFields.some(function(customField) {
    // チェックしたいカスタムフィールドのIDと値でチェック ("1"がtrue)
    return customField.id == 1 && customField.value == '1';
  });

  if (!isEnabled) {
    // 無効の場合は処理終了
    return;
  }

  // 以降実際に実行したいスクリプト
  console.log('execute script.');
});
