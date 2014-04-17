function check() {
		var homePhone =document.getElementById('insertHomePhone');
		var cellPhone =document.getElementById('insertCellPhone');
		var dateOfBirth =document.getElementById('insertDOB');
		var fullName = document.getElementById('insertFullName')
			$.ajax({
				type: "GET",
				url: "patientData.xml",
				dataType: "xml",
				success: function(xml){
					var firstName = $(xml).find('firstName').text();
					var lastName = $(xml).find('lastName').text();
					var fullDOB = $(xml).find('dateOfBirth').text();
					var dob = fullDOB.split('T');
					dateOfBirth.innerHTML = dob[0];
					fullName.innerHTML = firstName + " " + lastName;
					$(xml).find('contactInfos').each(function(){
						var id = $(this).find('subType').text();
						if (id === "phone_home" || id=== "phone_cell"){
							if(id === "phone_home"){
								var phoneNum = $(this).find('value').text();
								homePhone.innerHTML = phoneNum;
							}//end if
						else{
							var phoneNum = $(this).find('value').text();
							cellPhone.innerHTML = phoneNum;
							}//end else
						}//end if
					});//end xml.find.each
				}//end success
			});//end ajax
		
     
     }
