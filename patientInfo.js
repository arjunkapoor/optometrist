function check(){
// Start function when DOM has completely loaded 
$(document).ready(function(){ 

	// Open the patientDataExample.xml file
	$.get("http://cse-ilab-08.unl.edu:8282/patient/rest/patient/37",{},function(xml){
      	
		// Build an HTML string
		myHTMLOutput = '';
	 	myHTMLOutput += '<table width="98%" border="1" cellpadding="0" cellspacing="0">';
	  	myHTMLOutput += '<th>Full Name</th><th>Date of Birth</th>';
	  	
		// Run the function for each student tag in the XML file
		$('patient',xml).each(function(i) {
			FirstName = $(this).find("firstName").text();
			LastName = $(this).find("lastName").text();
			DOB = $(this).find("dateOfBirth").text();

			// Build row HTML data and store in string
			mydata = BuildPatientHTML(FirstName, LastName, DOB);
			myHTMLOutput = myHTMLOutput + mydata;
		});
		myHTMLOutput += '</table>';
		
		// Update the DIV called Content Area with the HTML string
		$("#ContentArea").append(myHTMLOutput);
	});
});
}

 
 function BuildPatientHTML(firstName, lastName, dateOfBirth){
	
	// Build HTML string and return
	output = '';
    output += '<tr>';
	output += '<td>'+ firstName + lastName + '</td>';
    output += '<td>'+ DOB +'</td>';
	output += '</tr>';
	return output;
}
	 
