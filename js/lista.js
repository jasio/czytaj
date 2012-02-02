 var options = {
valueNames: [ 'name', 'author', 'description', 'category', 'height', 'readwhen', 'recommend' ]
};

var featureList = new List('lovely-things-list', options);



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