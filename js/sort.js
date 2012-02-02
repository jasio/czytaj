var options = {
    valueNames: [ 'feature', 'category', 'description' ]
};
 
var values = [
    { feature: 'Add', category: 'gra', description:'Add items on the fly.' }
    , { feature: 'Get', category: 'film', description:'Get item based on value.' }
    , { feature: 'Update', category: 'gra', description:'Update items as you go.' }
];
 
var featureList = new List('kultura', options, values);
 
var newFeature = {
    feature: 'Remove'
    , description:'Remove items whenever you feel like.'
};
 
featureList.add(newFeature);