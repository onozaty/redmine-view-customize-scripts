# Clear due date when status is changed from closed

Clear due date when changing the status from closed to other status.  
ステータスを終了から他のステータスを変更した際に期日をクリアします。

## Setting

### Path Pattern

`/issues/`

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

  const beforeIssueStatusId = $('#issue_status_id').val();

  $('#all_attributes').on('change', '#issue_status_id', function() {

    if (beforeIssueStatusId == '5') {
      $('#issue_due_date').val('');
    }
  });
});
```

## Result

![result](./result.gif)
