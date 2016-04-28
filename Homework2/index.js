var unemployRateHK = {};

 _.each(gapminderData, function(datum){

 	var year = datum["Year"];
 	var unemployrate = datum["Total 15-24 unemployment (%)"];

 	unemployRateHK[year] = unemployrate;

 });

 console.log(unemployRateHK);	


 _.each(unemployRateHK, function(unemployrateHK, yearHK){
 	document.write('<svg height=200 width=200>');
 	document.write('<text x="0" y="15">'+ yearHK + '('+ Math.ceil(unemployrateHK) + '%)</text>')
	document.write('<circle cx="50" cy="50" r="'+ Math.ceil(unemployrateHK)+'" fill = "purple" stroke = "black" stroke-weight = "3" />');
 	document.write('</svg>');

 });