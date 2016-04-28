var countriesWithAidPerPerson = {};

 _.each(gapminderData, function(datum){

 	var countryName = datum["ODA aid per person (constant 2007 US$)"];
 	var AidPerPerson = datum["2007"];

 	countriesWithAidPerPerson[countryName] = AidPerPerson;
 });

 console.log(countriesWithAidPerPerson); 

 _.each(countriesWithAidPerPerson, function(oneCountryAidPerPerson, oneCountryName){
 	document.write('<svg height=200 width=200>');
 	document.write('<text x="0" y="15">'+ oneCountryName + '($'+ Math.ceil(oneCountryAidPerPerson) + ')</text>')
	document.write('<circle cx="50" cy="50" r="'+ Math.ceil(oneCountryAidPerPerson)/18+'" fill = "purple" stroke = "black" stroke-weight = "3" />');
 	document.write('</svg>');



 });