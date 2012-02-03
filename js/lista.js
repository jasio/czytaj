 var options = {
valueNames: [ 'name', 'author', 'description', 'category', 'height', 'readwhen', 'recommend' ]
};

 var options2 = {
valueNames: [ 'name', 'author', 'description', 'category', 'height', 'readwhen', 'recommend' ]
};

var featureList = new List('lovely-things-list', options);
var featureList = new List('lovely-things-list-aga', options2);



$('li#filter-beverages').click(function() {
featureList.filter(function(values) {
    if (values.recommend !== "") {
        return true;
    } else {
        return false;
    }
});
return false;
});
$('li#filter-none').click(function() {
featureList.filter();
return false;
});






