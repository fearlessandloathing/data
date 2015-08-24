/*

FUNCTIONS I'LL NEED:

DONE getYears(data) --> returns array of years (for years dropdown)
	UNNECESSARY (isStart/isEnd) maybe these are just global variables?

DONE getColumns(data) --> returns array of columns (for column picker dropdown)
	friendlyNames(abbr) --> string of friendly name

DONE getRaces(data) --> returns array of races (for race picker checkboxes)
	UNNECESSARY isChecked(I dunno) --> returns boolean

setDomain(data?) --> returns min and max values in array

setRange(data?) --> returns min and max values in array
*/

function getYears(data) {
	map = d3.map(data, function(d) {return d.year}).keys();
	return map;
}

function getColumns(data) {
	map = d3.keys(data[0]);
	return map;
}

function getRaces(data) {
	map = d3.map(data, function(d) {return d.race}).keys();
	return map;
}

function onClickHandler() {
	column = $('#columnsDropDown option:selected').val();
	startYear = $('#startYearDropDown option:selected').val();
	endYear = $('#endYearDropDown option:selected').val();
	races = $('input[name="races"]:checked').map(function () {
        		return this.value;
    		}).get();

	createGraph(column, startYear, endYear, races);

}

function convertName(column) {
	names = { "id":"ID","year":"Year","race":"Race","te":"Total Entering","rsyn":"Returning Second Year Students","rsyp":"Returning Second Year Percentage","gfyn":"Students Graduating in 5 Years","gfyp":"Percentage Graduating in 5 Years","gsyn":"Students Graduating in 6 Years","gsyp":"Percentage Graduating in 6 Years","gmtsyn":"Students Graduating in 6+ Years","gmtsyp":"Percentage Graduating in 6+ Years","cen":"Students Currently Enrolled","cep":"Percentage Currently Enrolled","nlen":"Students No Longer Enrolled","nlep":"Percentage No Longer Enrolled" };

	//column.toString();

	name = names[column].toString();

	return name;
}

function oc(array) {
	var object = {};
	for(var i=0;i<array.length;i++)
	{
		object[array[i]]='';
	}
	return object;
}

function yDomain(data, column, races, startYear, endYear) {	
	values = data.map( function(i) {
		if (i.year >= startYear && i.year <= endYear && i.race in oc(races)) {	
				
			return +i[column];
		} 
	});

	var minimum = d3.min(values); 

	if (minimum - 10 >= 0) {
		minimum = minimum - 10;
	} else { 
		minimum = 0; 
	}

	maximum = d3.max(values) + 5;

	minMax = [minimum, maximum];
	return minMax;
}

function toDate(startYear, endYear) {
	var start = new Date(startYear, 1, 1, 1, 1, 1, 1);
	var end = new Date(endYear, 1, 1, 1, 1, 1, 1);
	
	return [start, end];
}

function colorize(race) {
	colors = {"Asian American":"red", "African American":"orange", "Hispanic":"yellow", "Native American":"green", "White":"aqua", "Foreign":"blue", "Total":"purple"};

return colors[race];

}

/*
function cleanArray(actual){
  var newArray = new Array();
  for(var i = 0; i<actual.length; i++){
      if (actual[i]){
        newArray.push(actual[i]);
    }
  }
  return newArray;
}
*/
