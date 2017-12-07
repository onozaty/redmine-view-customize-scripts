/*
Path pattern: /issues
Type: JavaScript
担当者を入力補完を利用して選択できるようにします。
*/
$(function() {

  function replaceSelectToAutocomplete(selectElement) {

    var $select = $(selectElement);

    var options = $select.find('option[value!=""]')
      .map(function() {
        var $option = $(this);
        return {
          label: $option.text(),
          optionValue: $option.val()
        };
      })
      .toArray();

    var $autocomplete = $('<input type="text" class="ui-autocomplete-input autocomplete" autocomplete="off">')
      .autocomplete({
        source: options,
        minLength: 0,
        select: function(event, ui) {
          $select.val(ui.item.optionValue);
        },
        change: function(event, ui) {
          if (ui.item != null) {
            return;
          }

          var inputValue = $autocomplete.val();
          var matchOption = $.grep(options, function(option) {
            return option.label == inputValue;
          })[0];

          if (matchOption != null) {
            $select.val(matchOption.optionValue);
          } else {
            $autocomplete.val('');
            $select.val('');
          }
        }});

    var currentSelectValue = $select.val();
    if (currentSelectValue != '') {
      var initAutcompleteValue = $.grep(options, function(option) {
        return option.optionValue == currentSelectValue;
      })[0].label;

      $autocomplete.val(initAutcompleteValue);
    }

    $select.hide()
      .after($autocomplete);
  }

  function setupAssignedAutocomplete() {
    replaceSelectToAutocomplete('#issue_assigned_to_id');
  }

  // ステータス変更時などにDOMが差し替えられるので
  // フォームの内容が書き変わるたびに表示切替
  var _replaceIssueFormWith = replaceIssueFormWith;
  replaceIssueFormWith = function(html){

    _replaceIssueFormWith(html);

    setupAssignedAutocomplete();
  };

  setupAssignedAutocomplete();
});
