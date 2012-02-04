$(document).ready(function(){
	$("a#agnieszkalink").click(function(){
		$("div#janek").hide();
		$("div#dominik").hide();		
		$("div#agnieszka").show();
	});
});

$(document).ready(function(){
	$("a#janeklink").click(function(){
		$("div#agnieszka").hide();
		$("div#dominik").hide();
		$("div#janek").show();
	});
});

$(document).ready(function(){
	$("a#dominiklink").click(function(){
		$("div#janek").hide();
		$("div#agnieszka").hide();
		$("div#dominik").show();
	});
});

/* Janek */

$(document).ready(function(){
	$("#filter-none").hide();
	$("#filter-beverages").click(function(){
		$("#filter-beverages").hide();
		$("#filter-none").show();
	});
});

$(document).ready(function(){
	$("#filter-none").click(function(){
		$("#filter-none").hide();
		$("#filter-beverages").show();
	});
});

/* Aga */

$(document).ready(function(){
	$("#filter-none-2").hide();
	$("#filter-beverages-2").click(function(){
		$("#filter-beverages-2").hide();
		$("#filter-none-2").show();
	});
});

$(document).ready(function(){
	$("#filter-none-2").click(function(){
		$("#filter-none-2").hide();
		$("#filter-beverages-2").show();
	});
});

/* Domson */

$(document).ready(function(){
	$("#filter-none-3").hide();
	$("#filter-beverages-3").click(function(){
		$("#filter-beverages-3").hide();
		$("#filter-none-3").show();
	});
});

$(document).ready(function(){
	$("#filter-none-3").click(function(){
		$("#filter-none-3").hide();
		$("#filter-beverages-3").show();
	});
});


$(document).ready(function(){
$("a[rel=popover]")
  .popover()
  .click(function(e) {
    e.preventDefault()
  })
});

$(document).ready(function(){
$('#siteinfo').modal('hide');
});

$(document).ready(function(){
$('#aboutproject').modal('hide')
});

$(document).ready(function(){
$(document).tooltip({
     selector: "a[rel=tooltip]" 
   })
});