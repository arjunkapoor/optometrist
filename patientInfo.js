function spec(){
// Start function when DOM has completely loaded 
$(document).ready(function(){ 

	// Open the patientDataExample.xml file
	$.get("http://cse-ilab-08.unl.edu:8282/patient/rest/patient/37",{},function(xml){
      	
		// Build an HTML string
		myHTMLOutput = '';
	 	myHTMLOutput += '<table width="98%" border="1" cellpadding="0" cellspacing="0">';
	  	myHTMLOutput += '<th>Blah</th><th>Blah Blah</th>';
	  	
		// Run the function for each student tag in the XML file
		$('specPrescriptions',xml).each(function(i) {
			Axis_d = $(this).find("axisOd").text();
			Axis_s = $(this).find("axisOs").text();

			// Build row HTML data and store in string
			mydata = BuildSpecHTML(Axis_d, Axis_s);
			myHTMLOutput = myHTMLOutput + mydata;
		});
		myHTMLOutput += '</table>';
		
		// Update the DIV called Content Area with the HTML string
		$("#specArea").append(myHTMLOutput);
	});
});
}

function cLens(){
// Start function when DOM has completely loaded 
$(document).ready(function(){ 

	// Open the patientDataExample.xml file
	$.get("http://cse-ilab-08.unl.edu:8282/patient/rest/patient/37",{},function(xml){
      	
		// Build an HTML string
		myHTMLOutput = '';
	 	myHTMLOutput += '<table width="98%" border="1" cellpadding="0" cellspacing="0">';
	  	myHTMLOutput += '<th>Blah Blah</th><th>Blah Blah Blah</th>';
	  	
		// Run the function for each student tag in the XML file
		$('patient',xml).each(function(i) {
			created_timestamp = $(this).find("createdTimestamp").text();
			expiration_date = $(this).find("expirationDate").text();

			// Build row HTML data and store in string
			mydata = BuildDiagHTML(created_timestamp, expiration_date);
			myHTMLOutput = myHTMLOutput + mydata;
		});
		myHTMLOutput += '</table>';
		
		// Update the DIV called Content Area with the HTML string
		$("#lensArea").append(myHTMLOutput);
	});
});
}

function diagCode(){
// Start function when DOM has completely loaded 
$(document).ready(function(){ 

	// Open the patientDataExample.xml file
	$.get("http://cse-ilab-08.unl.edu:8282/patient/rest/patient/37",{},function(xml){
      	
		// Build an HTML string
		myHTMLOutput = '';
	 	myHTMLOutput += '<table width="98%" border="1" cellpadding="0" cellspacing="0">';
	  	myHTMLOutput += '<th>Blah Blah Blah</th><th>Blah Blah Blah</th>';
	  	
		// Run the function for each student tag in the XML file
		$('patient',xml).each(function(i) {
			pddO_d = $(this).find("pddOd").text();
			pddO_s = $(this).find("pddOs").text();

			// Build row HTML data and store in string
			mydata = BuildDiagHTML(pddO_d, pddO_s);
			myHTMLOutput = myHTMLOutput + mydata;
		});
		myHTMLOutput += '</table>';
		
		// Update the DIV called Content Area with the HTML string
		$("#diagArea").append(myHTMLOutput);
	});
});
}
 
 function BuildSpecHTML(axisOd, axisOs){
	
	// Build HTML string and return
	output = '';
    output += '<tr>';
	output += '<td>'+ axisOd  +'</td>';
    output += '<td>'+ axisOs +'</td>';
	output += '</tr>';
	return output;
}

function BuildLensHTML(createdTimestamp, expirationDate){
	
	// Build HTML string and return
	output = '';
    output += '<tr>';
	output += '<td>'+ createdTimestamp  +'</td>';
    output += '<td>'+ expirationDate +'</td>';
	output += '</tr>';
	return output;
}

function BuildDiagHTML(pddOd, pddOs){
	
	// Build HTML string and return
	output = '';
    output += '<tr>';
	output += '<td>'+ pddOd  +'</td>';
    output += '<td>'+ pddOs +'</td>';
	output += '</tr>';
	return output;
}
	 
