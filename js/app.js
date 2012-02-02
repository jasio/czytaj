$(document).ready(function(){
	$("a#agnieszkalink").click(function(){
		$("div#janek").hide();
		$("div#agnieszka").show();
	});
});

$(document).ready(function(){
	$("a#janeklink").click(function(){
		$("div#agnieszka").hide();
		$("div#janek").show();
	});
});

$("a[rel=popover]")
  .popover()
  .click(function(e) {
    e.preventDefault()
  })

$('#siteinfo').modal('hide');

$('#aboutproject').modal('hide')

