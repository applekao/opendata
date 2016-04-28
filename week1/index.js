 var data = socrataResponse['data']	;

 var countsByBorough = _.countBy(data, function(datum) {
  var boroughName = datum[10];
  return boroughName;
});

 //console.log(countsByBorough);

 _.each(countsByBorough, function(oneBoroughCount, boroughName	){
 	var bar = new String;

 	_.times(Math.ceil(oneBoroughCount/2), function(){
 		bar +='|';
 	})
 	document.write(boroughName + "<br>" + bar + "<br><br>");

 });