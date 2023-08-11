# Change the background color of the issue list according to the date of the custom field

Change the background color of the issue list according to the date of the custom field.  
カスタムフィールドの日付に応じて、チケットリストの背景色を変更します。

In this example, if the date in custom field ID:1 is in the future, the background color is pink.  
この例では、カスタムフィールドID:1 の日付が未来の場合、背景色をピンクにします。

## Setting

### Path Pattern

`/issues$`

### Insert Position

Head of all pages
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

  const now = new Date();
  const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  $('table.issues td.cf_1')
    .filter(function() {
      const str = $(this).text();
      if (str === '') {
        return false;
      }

      const date = new Date(str);
      return date > nowDate;
    })
    .parent()
    .css({
      'background-color': 'pink'
    });
});
```

## Result

![result](./result.png)
