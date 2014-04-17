function getAppointments() {
	var todayDate = new Date();
	var isoTodayDate = todayDate.toISOString();
	
	var otherDate = new Date();
		$.ajax({
				type: "GET",
				url: "appointmentData.xml",
				dataType: "xml",
				success: function(xml){
					$(xml).find('appointment').each(function(){
						var appointmentDate = $(this).find('date').text();
						
						var appDateArray= appointmentDate.split('T');
						var appFullDate = appDateArray[0];
						var appFullDateArray = appFullDate.split('-');
						var year = appFullDateArray[0];
						var month = appFullDateArray[1];
						var day = appFullDateArray[2];
						var time = appDateArray[1];
												
						
						
						otherDate.setFullYear(year,month-1,day)
						
						
						var notes =$(this).find('note').text();
						var insertString = "<li>"+ appFullDate + "  <b>Notes</b>  :"+notes +"</li>";
						if (otherDate > todayDate){
							//alert("otherday is after today");
							$('#FutureAppointments').append(insertString);
						}
						else{
							//alert("other date is before today");
							$('#PreviousAppointments').append(insertString);
						}
						
						
																
						
						
					});//end xml.find.each prescriptions
				}//end success
			});//end ajax
		
     
     }
