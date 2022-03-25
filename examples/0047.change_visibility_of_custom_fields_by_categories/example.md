# Change the visibility of custom fields by categories

Change the visibility of custom fields by categories.  
カテゴリ毎にカスタムフィールドの表示/非表示を切り替えます。

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

  const changeVisible = function() {
    switch($('#issue_category_id').val()) {
      case '1':
        $('#issue_custom_field_values_1').parent().show();
        $('#issue_custom_field_values_2').parent().hide();
        break;

      case '2':
        $('#issue_custom_field_values_1').parent().hide();
        $('#issue_custom_field_values_2').parent().show();
        break;

      default:
        $('#issue_custom_field_values_1').parent().show();
        $('#issue_custom_field_values_2').parent().show();
        break;
    }
  }

  changeVisible();
  $('#issue_category_id').on('change', changeVisible());
});
```

## Result

![result](./result.gif)
