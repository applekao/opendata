var unemployRateHK = {};
var unemployrate ={};

var countUnemploy = _.map(gapminderData, function(datum){ return datum["Total 15-24 unemployment (%)"] });
// console.log(countUnemploy);

 //---D3----//

 //Width and height
      var w = 500;
      var h = 200;
      var barPadding = 1;
      
      var dataset = countUnemploy;

      console.log(dataset);
      
      //Create SVG element
      var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

      svg.selectAll("rect")
         .data(dataset)
         .enter()
         .append("rect")
         .attr("x", function(d, i) {
            return i * (w / dataset.length);
         })
         .attr("y", function(d) {
            return h - (d * 10);
         })
         .attr("width", w / dataset.length - barPadding)
         .attr("height", function(d) {
            return d * 10;
         })
         .attr("fill", "teal");
         ;

      	svg.selectAll("text")
			   .data(dataset)
			   .enter()
			   .append("text")
			   .text(function(d) {
			   		d = Math.ceil(d)+"%";
			   		return d;
			   })
			   .attr("text-anchor", "middle")
			   .attr("x", function(d, i) {
			   		return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
			   })
			   .attr("y", function(d) {
			   		return h - (d * 10) + 14;
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "11px")
			   .attr("fill", "white");
