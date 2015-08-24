/*





*/

function createGraph(column, startYear, endYear, races) {
/*
console.log(column);
console.log(startYear);
console.log(endYear);
console.log(races);
*/
$("svg").remove(); 
//var elem = document.getElementById("svg");
//elem.remove(); 

var yearNum = endYear - startYear + 1;

var data;

d3.csv("graddata.csv", function(csv) {

	//console.log(column);

	data = csv;

	var margin = {top: 20, right: 30, bottom: 30, left: 40},
		    width = 960 - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom;

	var svg = d3.select("body").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	    .append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
		.attr("class", "chart");

		var x = d3.time.scale()
			.range([0, width]);

			//.ticks(d3.time.year, 1);
		

		//var x = d3.scale.linear()
		    //.range([0, width]);

		var y = d3.scale.linear()
			.range([height, 0]);

		x.domain(toDate(startYear, endYear));
			
		//var maxValues = [];

		y.domain(yDomain(data, column, races, startYear, endYear));

		var xAxis = d3.svg.axis()
			.scale(x)
			.ticks(d3.time.year, 1)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis);

		svg.append("g")
			.attr("class", "y axis")
			.call(yAxis);

		data = d3.nest()
			.key(function(d) {return d.year;})
			.sortKeys(d3.ascending)
			.entries(csv);

		var blockWidth = width / yearNum;

		var g = svg.selectAll(".chart").data(data).enter()
		  .append("g")
			.attr("transform", function(d, i) { return "translate(" + i * blockWidth + ",0)"; })
		    	.attr("width", blockWidth)
			.attr("height", height);
	


		/*y.domain([0, d3.max(data, function(d) {
			array1 = d.values;
			data = [];
			
			jQuery.each(array1, function(i) {
				blah = [];
				array2 = array1[i];
				num = array2.rsyp;
				num2 = +num;
				data.push(num2);
			});	
			//return maxValues;
		})]);

		console.log(y.domain);
*/

		  g.selectAll("rect")
		      .data(function(d) { return d.values; })
//console.log(d.values) RETURNS 13 objects with numerical keys with values containing the data entries
//console.log(d3.entries(d.values)) RETURNS 13 object arrays of 6 objects with numerical keys with those values being the data entries
//console.log(d3.entries(d.i)) RETURNS 13 empty arrays
//console.log(d3.entries(i)) RETURNS 13 empty arrays
//console.log(i.entries()) RETURNS undefined
//console.log(i) RETURNS array 0-13
//console.log(d) RETURNS objects with key for each year, values are object arrays with objects for each race as values containing the various key/value pairs of the data I want
		      .enter()
		  .append("rect")
			.filter( function(d) {
				return (d.year >= startYear && d.year <= endYear) && (d.race in oc(races))	
			})
			.attr("height", function(d) { 
				map = d3.map(d); 
				return height - y(map.get(column)); })
			.attr("width", function(d, i) { 
				barWidth = blockWidth / races.length;
				return (barWidth - 1); 
			})
			.attr("transform", function(d, i) {
				return "translate(" + i * barWidth + ",0)"
			})
			.attr("y", function(d) { 
				array = d3.map(d);
				num = array.get(column);
				re = +num;
				return y(re); 
			})
			.attr("fill", function(d) {
				return colorize(d.race);
			});
		/*	

var graphData = data.map(function(i) {
		var newMap = d3.map(i);
		var value = newMap.get(key);
		return value;
	});

*/
//"fill", function() { console.log(barWidth); }      
//return "translate(" + i * barWidth + ",0)";

});

}//end function createGraph
