# When the project is changed, the watcher is also changed

When the project is changed, the watcher is also changed.  
プロジェクトを変更した時に、ウオッチャーを変更します。

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

  const changeWatcher = function() {

    // reset all watchers
    $('input[name="issue[watcher_user_ids][]"]').prop('checked', false);

    switch($('#issue_project_id').val()) {
      case '1':
        $('#issue_watcher_user_ids_6 input').prop('checked', true);
        break;

      case '2':
        $('#issue_watcher_user_ids_7 input').prop('checked', true);
        break;

      case '3':
        $('#issue_watcher_user_ids_8 input').prop('checked', true);
        break;
    }
  };

  const allAttributes = document.getElementById('all_attributes');
  if (!allAttributes) {
    return;
  }

  allAttributes.addEventListener(
    'change',
    function(e) {
      if (e.target.id == 'issue_project_id') {
        changeWatcher();
      }
    },
    // Capturing phase (To work before updateIssueFrom is executed)
    true);
});
```

## Result

![result](./result.gif)

## Note

* [プロジェクト切り替え時にウォッチャーを変更する\(Redmine View Customize Plugin\) \- Enjoy\*Study](https://blog.enjoyxstudy.com/entry/2019/12/08/000000)
