$("a[rel=popover]")
  .popover()
  .click(function(e) {
    e.preventDefault()
  })

$('#siteinfo').modal('hide');

$('#aboutproject').modal('hide')