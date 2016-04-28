 var data = fitbitData["activities-steps"]	;

	 var countsStep = _.map(data, function(datum){ return datum["value"] });
	 var countsTime = _.map(data, function(datum){ return datum["dateTime"] });

console.log(countsStep);
console.log(countsTime);

 _.each(countsStep, function(oneStepCount, countsTime){
 	var bar = new String;

 	_.times(Math.ceil(oneStepCount/100), function(){
 		bar +='|';
 	})
 	document.write("3/"+countsTime + "<br>" + bar + "<br><br>");

 });