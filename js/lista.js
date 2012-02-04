$(document).ready(function(){

var options = {
valueNames: [ 'name', 'author', 'description', 'category', 'height', 'readwhen', 'recommend' ]
};

 var options2 = {
valueNames: [ 'name', 'author', 'description', 'category', 'height', 'readwhen', 'recommend' ]
};

 var options3 = {
valueNames: [ 'name', 'author', 'description', 'category', 'height', 'readwhen', 'recommend' ]
};

var featureList = new List('lovely-things-list', options);
var featureList = new List('lovely-things-list-aga', options2);
var featureList = new List('lovely-things-list-dom', options3);

$('#filter-beverages').click(function() {
featureList.filter(function(values) {
    if (values.recommend !== "") {
        return true;
    } else {
        return false;
    }
});
return false;
});
$('#filter-none').click(function() {
featureList.filter();
return false;
});

$('#filter-beverages-2').click(function() {
featureList.filter(function(values) {
    if (values.recommend !== "") {
        return true;
    } else {
        return false;
    }
});
return false;
});
$('#filter-none-2').click(function() {
featureList.filter();
return false;
});

$('#filter-beverages-3').click(function() {
featureList.filter(function(values) {
    if (values.recommend !== "") {
        return true;
    } else {
        return false;
    }
});
return false;
});
$('#filter-none-3').click(function() {
featureList.filter();
return false;
});

});