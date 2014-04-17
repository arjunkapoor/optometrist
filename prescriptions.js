function getPrescription() {
		$.ajax({
				type: "GET",
				url: "patientData.xml",
				dataType: "xml",
				success: function(xml){
					$(xml).find('rcopiaPrescriptions').each(function(inside){
						var fullStopDate = $(this).find('stopDate').text();
						var stopDateArray = fullStopDate.split('T');
						var stopDate = stopDateArray[0];
						
						
						var rcopiaDrug = $(this).find('rcopiaDrug');
						var brandname = $(rcopiaDrug).find('brandName').text();
						var genericname = $(rcopiaDrug).find('genericName').text();
						var strength = $(rcopiaDrug).find('strength').text();
						
						
						//var string = '<p> BrandName: ' + brandname + ' : GenericName: ' +  genericname + ' : Strength : ' + strength + '</p>' 
						var string2 = '<tr><td>' + brandname+'</td><td>' + genericname+'</td><td>'+strength+'</td><td>' + stopDate +'</td><tr>'
						if (brandname =='' || genericname ==''){
						
						}
						else{
						//$('#medicationDIV').append(string);
						$('#prescriptionTable').append(string2);
						}
					});//end xml.find.each prescriptions
				}//end success
			});//end ajax
		
     
     }
