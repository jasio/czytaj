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

$(document).ready(function(){
	$("li#filter-none").hide();
	$("li#filter-beverages").click(function(){
		$("li#filter-beverages").hide();
		$("li#filter-none").show();
	});
});

$(document).ready(function(){
	$("li#filter-none").click(function(){
		$("li#filter-none").hide();
		$("li#filter-beverages").show();
	});
});

$("a[rel=popover]")
  .popover()
  .click(function(e) {
    e.preventDefault()
  })

$('#siteinfo').modal('hide');

$('#aboutproject').modal('hide')

$(document).tooltip({
     selector: "a[rel=tooltip]" 
   })


