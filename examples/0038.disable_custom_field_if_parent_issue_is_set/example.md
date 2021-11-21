# Disable custom field if parent issue is set

Disable custom field if parent issue is set.  
親チケットが設定されたらカスタムフィールドを無効にします。

## Setting

### Path Pattern

None

### Insert Position

Bottom of issue form
<!-- 
Head of all pages
Bottom of issue form
Bottom of issue detail
Bottom of all pages
-->

### Code

JavaScript
<!--
JavaScript
CSS
HTML
-->

```javascript
$(function() {

  const changeDisabled = function() {
    if ($('#issue_parent_issue_id').val() != '') {
      // Note: Change the ID according to the custom field you want to target
      $('#issue_custom_field_values_1').prop('disabled', true);
    }
  }

  $('#issue_parent_issue_id').on('change', changeDisabled);

  changeDisabled();
});
```

## Result

![result](./result.gif)
