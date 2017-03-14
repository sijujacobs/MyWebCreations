(function ($) {
	var CALENDAR = {
		months:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], 
		CURRENT_MONTH:"",
		CURRENT_YEAR:"",

		init: function() {
			var thisDoc = this;
			var date = new Date();
			thisDoc.setCalendar(date.getFullYear(), date.getMonth());//0 for JAN and 11 for DEC	

			thisDoc.monthNavigationClick();
		}, 
		setCalendar: function(year, month) { 
			var thisDoc = this;
			var day = 1; 
			console.log("setCalendar:: year : " + year + ", month: " + month);
	        var startDay = new Date(year, month, day).getDay();
	       console.log("setCalendar:: startDay : " + startDay );
		   var daysInMonths = [31, (((year%4==0)&&(year%100!=0))||(year%400==0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	        
			var daysInCurrentMonth = daysInMonths[month]
			//console.log("daysInCurrentMonth : " + daysInCurrentMonth);
			thisDoc.CURRENT_MONTH = month;
			thisDoc.CURRENT_YEAR = year;
			//console.log("Month  : " + thisDoc.months[month]);
			$("#calenderHeader").text(thisDoc.months[month] + "  " + year);
			var dayCols = $("#calender .dayCol");
			$(dayCols).empty();
			for(var i = 0; i <= dayCols.length ; i++){
				var thisDayCol = dayCols[i];
				if(i >= startDay && day <= daysInCurrentMonth){
					$(thisDayCol).append('<div class="dayContent"><label class="dayLabel"> ' + day + '</label><input class="dayInput"></input></div>');
					thisDoc.highLightToday(day, thisDayCol);
					$(thisDayCol).css({"visibility":"visible"});
					day++;
				}else{
					$(thisDayCol).css({"visibility":"hidden"});
				}
			}
			$("#calenderFrame").fadeIn(300);
	    },
		highLightToday:function(day, thisDayCol){
			var thisDoc = this;
			var date = new Date();
			if(date.getFullYear() === thisDoc.CURRENT_YEAR && date.getMonth() === thisDoc.CURRENT_MONTH && date.getDate() === day){
				$(thisDayCol).addClass("today");
			}else{
				$(thisDayCol).removeClass("today");
			}
		},
		monthNavigationClick: function(){
			var thisDoc = this;
			$(document).on( "click", "#prev, #next", function(e) {
				  $("#calenderFrame").fadeOut( "300", function() {
					var thisButton = e.target.id;
					if(thisButton === 'prev'){
						--thisDoc.CURRENT_MONTH;
						//thisDoc.CURRENT_MONTH = thisDoc.CURRENT_MONTH < 0 ? 11: thisDoc.CURRENT_MONTH;
						if(thisDoc.CURRENT_MONTH < 0){
							thisDoc.CURRENT_MONTH = 11;
							thisDoc.CURRENT_YEAR = thisDoc.CURRENT_YEAR - 1;
						}
					}else{
						++thisDoc.CURRENT_MONTH;
						//thisDoc.CURRENT_MONTH = thisDoc.CURRENT_MONTH > 11 ? 0: thisDoc.CURRENT_MONTH;
						if(thisDoc.CURRENT_MONTH > 11){
							thisDoc.CURRENT_MONTH = 0;
							thisDoc.CURRENT_YEAR = thisDoc.CURRENT_YEAR + 1;
						}
					}
					console.log("Current Year : " + thisDoc.CURRENT_YEAR + ", Current Month : " + thisDoc.CURRENT_MONTH);
					thisDoc.setCalendar(thisDoc.CURRENT_YEAR, thisDoc.CURRENT_MONTH);
				  });
  
				

			});
		}
		
				
	}; // end CALENDAR
	CALENDAR.init();
})(jQuery);