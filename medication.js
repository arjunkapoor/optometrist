function getMedication() {
		
		medicationDIV = document.getElementById("medicationDIV");
		
		$.ajax({
				type: "GET",
				url: "patientData.xml",
				dataType: "xml",
				success: function(xml){
					$(xml).find('rcopiaMedications').each(function(inside){
						var fullStartDate = $(this).find('startDate').text();
						var startDateArray = fullStartDate.split('T');
						var startDate = startDateArray[0];
						
						
						var rcopiaDrug = $(this).find('rcopiaDrug');
						var brandname = $(rcopiaDrug).find('brandName').text();
						var genericname = $(rcopiaDrug).find('genericName').text();
						var strength = $(rcopiaDrug).find('strength').text();
						
						
						//var string = '<p> BrandName: ' + brandname + ' : GenericName: ' +  genericname + ' : Strength : ' + strength + '</p>' 
						var string2 = '<tr><td>' + brandname+'</td><td>' + genericname+'</td><td>'+strength+'</td><td>' + startDate +'</td><tr>'
						if (brandname =='' || genericname ==''){
						
						}
						else{
						//$('#medicationDIV').append(string);
						$('#medicationTable').append(string2);
						}
						//medicationDiv.insertAdjacentHTML('beforeend',string);
						
					});//end xml.find.each medications
				}//end success
			});//end ajax
		
     
     }
