## Process when creating or saving an issue

```javascript
$('#issue-form').on('submit', function() {

  if (!confirm('Are you sure?')) {
    // If you don't reset it, it won't be submitted the next time.
    this.dataset.submitted = '';
    // If it returns false, it will not be executed.
    return false;
  }
});
```

## Check the roles

```javascript
const hasRoleId3 = ViewCustomize.context.project.roles.some(function(role) { return role.id == 3 });
```

* https://github.com/onozaty/redmine-view-customize#viewcustomizecontext-javascript

## Check the value before the change

The previous value should be saved.

```javascript
const target = '#issue_assigned_to_id';
let prevValue = $(target).val();

$(target).on('change', function() {
  console.log('old:' + prevValue + ' new:' + $(target).val());
  prevValue = $(target).val();
});
```
