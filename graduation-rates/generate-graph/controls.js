/*
So all these functions need to write to the doc the html control options...

Maybe the program will run faster if the first three functions were all one? So there'd only be one call to the csv file?

I'll need:
-column drop down
-races check boxes
-years dropdown (start and end)
-button onclickhandler (done, but jank)

*/

function makeColumnDropDown(array) {	
	var columns = getColumns(array);
	var html = "<select id='columnsDropDown'>";

	$.each(columns, function(i) {
		column = columns[i];
		var string = "<option value='" + columns[i] + "'>" + convertName(columns[i]) + "</option>";
		html += string;
	});

	html += "</select>";

	return html;
}

function makeRaceCheckBox(array) {
	var races = getRaces(array);
	var ids = [];

	$.each(races, function(i) {
		string = races[i].replace(/\s+/g, '');
		ids.push(string);
	});

	var html = "";

	$.each(races, function(i) {
		var string = "<input type=checkbox name='races' value='" + races[i] + "' id='" + ids[i] + "'>" + races[i] + "<br>";
		html += string;
	});

	return html;
}

function makeStartYear(array) {	
	var years = getYears(array);
	var html = "<select id='startYearDropDown'>";

	$.each(years, function(i) {
		var string = "<option value='" + years[i] + "'>" + years[i] + "</option>";
		html += string;
	});

	html += "</select>";

	return html;
}

function makeEndYear(array) {	
	var years = getYears(array);
	var html = "<select id='endYearDropDown'>";

	$.each(years, function(i) {
		var string = "<option value='" + years[i] + "'>" + years[i] + "</option>";
		html += string;
	});

	html += "</select>";

	return html;
}


//This is probably the WRONG way to do it...
function makeSubmitButton() {
	var html = "<input type='button' value='graph!' onClick='onClickHandler()'>";
	return html;
}
