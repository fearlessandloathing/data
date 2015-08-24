



function createGraph(data) {

var rowData = [];

var selectedKey;

var rowsNum = data.rows.length;


for ( i = 0; i < rowsNum; i++) {
	var value = data.rows[i];
	rowData.push(value);
}

dataforgraph = jQuery.makeArray(rowData);

//dataforgraph = 
console.log("whatever");

//MENU WORK
	var selectedKey;
	var dropDown = jQuery('select');
	var options = "";

	var keys = d3.keys(dataforgraph[0]);

	$.each(keys, function(i) {
		var string = "<option>" + keys[i] + "</option>";
		options += string;
	});
	dropDown.append(options);
	console.log(dropDown);

	

	//dropDown.selected(function() {
	//	selectedKey = $( "select option:selected" );
	//});

	

	$( "select" ).change(function() {
		$( "select option:selected" ).each(function() {
			selectedKey = $( this ).text();
		});
	});
	//.trigger( "change" );
/*
	$('button').click(function() {
		console.log("Draw graph fired");
		console.log(dataforgraph);
		console.log(selectedKey);
		drawGraph(dataforgraph, selectedKey);

		});
*/
}


function drawGraph(dataforgraph, selectedKey) {
	console.log("Draw graph started");
	var width = 1000;
	var height = 500;
	var div = d3.select('#chart').append('div')
	    .attr({
	      'width': width + "px",
	      'height': height + "px"
	    })
	    .style('border', '1px solid black');

	var rows = [];

	for ( i = 0; i < dataforgraph.length; i++ ) {
		rows.push(dataforgraph[i][selectedKey]);
	}
/*
	$.each(dataforgraph, function(i, selectedKey) {
		console.log(dataforgraph[i]);
		console.log(selectedKey);
		rows.push(dataforgraph[i].selectedKey);
	});
*/
	var barHeight = height / rows.length  + "px";
	var maxDataValue = d3.max(rows);
	var barWidth = function(d) {
		return (d.selectedKey * (width / maxDataValue)) + "px";
	};


	var barX = "0px";
	var barY = function(d, i) {
		return i * height / rows.length + "px";
	};

	div.selectAll('div.number')
	      .data(dataforgraph).enter()
	  .append('div')
	      .attr({
			'class': 'number'
		})
		.style({
			'background-color': 'red',
			 'x': barX,
			 'y': barY,
			 'width': barWidth,
			 'height': barHeight
			})

	    .append('g')
		.text(function(d) {
			return d.Race;
		})
		.attr({
		   'class': 'label',
		})
		.style({
			"color": "black",
			"font-family": "sans-serif",
			"font-size": '20px'
		});
	console.log("Draw graph ended");

}//end of drawGraph function

	/*var formString;
	formString.append("<form><select>");
	$.each(graphData, function(i) {
		var option = "<option>" + graphData[i] + "</option>";
		formString.append(option);
		
	});*/
	//console.log(formString);















/*
$.each(rowData, function(row) {
	//graphData.push(rowData[row][2]["value"]);
	//var inner = rowData[row];
	graphData.push(row);
       
	$.each(inner, function(objects) {
		//graphData.push(d3.entries(objects));
		array = objects.toArray();
		console.log(array);
	});

});*/

/*
svg.selectAll('text.label')
	.data(graphData).enter()
  .append('text')
       .text(function(d) {
		return d.Race;
	})
	.attr({
	   'class': 'label',
           'x': barX,
           'y': function() {
			return barHeight + 50;
		}
	})
        .style("font-family", "sans-serif")
        .style("font-size", "50px")
        .attr("fill", "black");
*/
/*

var columnNames = [
	"CurrentlyEnrolledNum",	
	"CurrentlyEnrolledPer",	
	"GraduateFiveYearNum",	
	"GraduateFiveYearPer",	
	"GraduateSixPlusYearNum",	
	"GraduateSixPlusYearPer",	
	"GraduateSixYearNum",	
	"GraduateSixYearPer",	
	"NoLongerEnrolledNum",	
	"NoLongerEnrolledPer",	
	"Race",	
	"ReturningSecondYearNum",	
	"ReturningSecondYearPer",	
	"TotalEntering",
	"Year"
];//15 items

svg.selectAll('text.label')
    .append('text')
       .text(function(d, i) {
		return d.Race;
	})
     .attr({
	 'class': 'label',
         'x': barX,
         'y': barY,
	 'fill': black
	});
*/
/*
svg.selectAll('rect')
    .append('g')
       .text(function(d, i) {
		return d.Race;
	})
      .attr({
	 'class': 'label',
         'x': barX,
         'y': barY,
	})
	.style({
		'font-size': '16px',
		'color': 'black'
	});
*/
/*
rect.selectAll('.number')
      .attr('height', barHeight + 'px')
      .attr('width', function(d, i) {
		return width / i.TotalEntering + 'px';
	})
      .attr('x', '0px')
      .attr('y', function(d, i) {
			return i * barHeight 'px';
		})
      .attr('fill', '#dff')
      .attr('stroke', '#444');
*/




/*
*/
		



/*
var barWidth = function(d, i) {
	return d * (width / i.TotalEntering);
};

root.selectAll('rect.number')
      .data(graphData).enter()
    .append('rect')
      .attr({
        'class': 'number',
        'height': function(){
			return height / rows.length;
		}),
        'width': function(d, i) {
			return d * (width / i.TotalEntering);
		}),
        'x': 0,
        'y': function(d, i) {
			return i * barHeight;
		}),
        'fill': '#dff',
        'stroke': '#444'
      });

/*

/*
var totalEntering = [];

$.each(graphData, function(i) {
	totalEntering.push(graphData[i]["TotalEntering"]);
});

var maxDataValue = d3.max(totalEntering);
var barHeight = height / totalEntering.length;
var barWidth = function(d) {
	return d * (width / maxDataValue);
};

var barX = 0;
var barY = function(d, i) {
	return i * barHeight;
};
root.selectAll('rect.number')
      .data(totalEntering).enter()
    .append('rect')
      .attr({
        'class': 'number',
        'x': barX,
        'y': barY,
        'width': barWidth,
        'height': barHeight,
        'fill': '#dff',
        'stroke': '#444'
      });
*/



//WORKS!!!!! (But not an SVG so not really that good
/*d3.select(".chart")
	//.selectAll("div")
	.data(graphData)
	.enter().append("div")
		.style("background-color", "blue")
		.style("width", function(d, i) { 
			return d.TotalEntering * 10 + "px";
		})
	.text( function(d, i) {
			return d.Race;
		});
*/	



/*
var margin = {top: 20, right: 80, bottom: 30, left: 50},
    width = 640 - margin.left - margin.right,
    height = 380 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .domain([0, d3.max(graphData, function(d) { return d.length - 1; })]) //d.values.length
    .range([0, width]);

var y = d3.scale.linear()
    .domain([d3.min(graphData, function(d) { return d3.min(d); }), //d.values
             d3.max(graphData, function(d) { return d3.max(d); })])//d.values
    .range([height, 0]);

var color = d3.scale.category10()
    .domain(d3.keys(data[0]).filter(function(key) { return key === "name"; }));

var xAxis = d3.svg.axis()
    .scale(x)
    .tickFormat(d3.format('d'))
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .interpolate("basis")
    .x(function(d, i) { return x(i); })
    .y(function(d, i) { return y(d); });

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);

var people = svg.selectAll(".people")
      .data(graphData)
    .enter().append("g")
      .attr("class", "people");

people.append("path")
      .attr("class", "line")
      .attr("d", function(d) { return line(d); }) //d.values
      .style("stroke", "blue"); //function(d) { return color(d.name); });
*/


//console.log(graphData);



/*

var rowsNum = data.rows.length;

var rowData = [];

for ( i = 0; i < rowsNum; i++) {
	var value = d3.entries(data.rows[i]);
	rowData.push(value);
}

var entries = rowData[0].length;

//console.log(rowData);

//alert(rowData[0].length);

//alert(rowData[0][0]["value"]);






		
		
                $.each(rowData, function(row) {
                        //console.log(rowData[row][1]["value"]);
                        var inner = rowData[row];
        
                        $.each(inner, function(objects) {
                                //console.log(objects); // number 1-14
                                
                                graphData.push(cell); //[Object { key="Year", value=2000}, Object { key="Race", value="Asian American"}, Object { key="TotalEntering", value=53}, Object { key="ReturningSecondYearNum", value=47}, Object { key="ReturningSecondYearPer", value=88.7}, Object { key="GraduateFiveYearNum", value=42}, Object { key="GraduateFiveYearPer", value=79.2}, Object { key="GraduateSixYearNum", value=43}, Object { key="GraduateSixYearPer", value=81.1}, Object { key="GraduateSixPlusYearNum", value=45}, Object { key="GraduateSixPlusYearPer", value=84.9}, Object { key="CurrentlyEnrolledNum", value=0}, Object { key="CurrentlyEnrolledPer", value=0}, Object { key="NoLongerEnrolledNum", value=8}, Object { key="NoLongerEnrolledPer", value=15.1}]
                                //console.log(cell["Race"]);
                               
                                        //$.each(cell[value], function(number) {
                                        //        console.log(number);
                                        //});
                                       /*
                                       $.each(cell, function(contents) {
                                                //console.log(cell); // Object { key="Year", value=2000 } (repeated 3 times each)
                                                //console.log(contents); // "key"/"value"
                                                //console.log(contents.value); //30 undefined
                                                //console.log(contents[value]); //30 undefined
                                                //console.log(contents["value"]); // 30 undefined
                                                //console.log(contents[cell]); // 30 undefined
                                                //console.log(contents["value"]); //30 undefined
                                                

                                        });
                                 //number = inner[1]["value"];
                                 // graphData.push(number);
                        });
                });

                




	//$.each(rowData[i], function(array) {

		//var first = array[0];
		//var year = jQuery.parseJSON(first);
		//value = $(array[0]);		
		//console.log(value);
		
	//});

	//for ( m = 0; m < entries; m++ ) {
	//	var value = rowData[i][m]["value"];		
	//	graphData.push(value);
	//}



console.log(graphData);

};






};



console.log("following is the data from createGraph");
console.log(data);
console.log("following is the data in an array");
dataArray = jQuery.makeArray(data);
console.log(dataArray);
//document.getElementById("chart").innerHTML = data;

var colsArray = [];
var rowsArray = [];

$.each(data.cols, function(col) {
	colsArray.push(col);		
});

$.each(data.rows, function(row) {
	rowsArray.push(row);		
});

console.log(colsArray);
console.log(rowsArray);





/*
d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("background-color", "blue")
    .style("width", function(d) { 
		return d * 10 + "px";
	}) 
    .text(function(d) { return d;} );

};

/*	graphingData = [];

	//console.log(data.rows[0]);
	//console.log(row);
	
	$(data).toArray();
	
	for ( i=0; i < data.rows.length; i++ ) {
		row = data.rows[i];
		$(row).toArray();

		for (m=0; m < columnNames.length; m++ ) {
			property = columnNames[m];
			if (row.contains(property)) {
				value = row.val(property);
				graphingData.push(value);
			};

		}
	}
		


		
/*
		var property = columnNames[i];
			
			$.each(data.rows, function(row){
				var cell = $(row).property;
				console.log(cell);
			});
		}
*/
