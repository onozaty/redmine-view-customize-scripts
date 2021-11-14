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

