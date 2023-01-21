$('.appointment ').on('shown.bs.modal', function (e) {
	
	 $.ajax({
			  method: "POST",
			  type:"POST",
			  data:{'locationid':$('#locationidmodal').val()},
			  url:"gettimieclendar",
			})
			.done(function( data ) {				
				var data=JSON.parse(data);
				showcalenderfront(data);
			});

});

function showcalenderfront(datacal){
     $('#calendar').fullCalendar('destroy');
    	$('#calendar').fullCalendar({
		defaultView: 'agendaWeek',
		views: {
		 week: {
			 //columnFormat: 'dddd \n d/MMM',
			titleFormat: 'D MMMM YYYY',
				titleRangeSeparator: ' to ',
		 }, 
	   },
		themeSystem: 'bootstrap3',

		hiddenDays: [0],

		minTime: datacal.min,

		maxTime: datacal.max,
		
		slotDuration: '00:'+datacal.duration,
		
		businessHours:datacal.data ,

		allDaySlot: false,

		height: 'auto',

		aspectRatio: 2,

		selectLongPressDelay: 1,

		header: {

			left: 'prev,next ',

			center: 'title',

			right: ''

		},

		defaultDate: new Date(),

		navLinks: true, // can click day/week names to navigate views

		selectable: true,

		selectConstraint: "businessHours",

		select: function (start, end, jsEvent, view) {
			
			// start contains the date you have selected

			// end contains the end date. 

			// Caution: the end date is exclusive (new since v2).
			
		/*	if(start.isBefore(moment())) {
    			$('#calendar').fullCalendar('unselect');
    			alert("Please select today's date or fature date for appoitment. ");
    			return false;
			}*/
            
			var allDay = !start.hasTime && !end.hasTime;

			var check = $.fullCalendar.formatDate(start, 'YYYY-MM-DD HH:mm:ss');

			var today = $('#calendar').fullCalendar('getDate').format('YYYY-MM-DD HH:mm:ss');
			
			if (check >= today) {

				var instart = moment(start).format('YYYY-MM-DD HH:mm:ss');

				var inend = moment(end).format('YYYY-MM-DD HH:mm:ss');

				var in1hourstart = moment(instart).add(datacal.duration, 'minutes');	
				
				if (inend == moment(in1hourstart).format('YYYY-MM-DD HH:mm:ss')) {		
                    
					$('#dateandtime').val(moment(start).format('YYYY-MM-DD hh:mm A'));
					//$('#dateandtime').val(moment(in1hourstart).format('YYYY-MM-DD hh:MM A'));

				} else {

					alert('Please select only one time slot.');

					$('#calendar').fullCalendar('unselect');

				}

			} else {
				alert("please select today's date or future date for an appointment. ");

				$('#calendar').fullCalendar('unselect');

			}
		},

		weekNumbers: false,
		weekNumbersWithinDays: false,
		weekNumberCalculation: 'ISO',
		editable: false,
		eventLimit: false, // allow "more" link when too many events	
		events: function(start, end, timezone, callback) {
		 var location=$('#locationnamedrop option:selected').text();
		 // var getUrl = window.location;
		 // console.log(getUrl);
        // var baseUrl = getUrl .protocol + "//" + getUrl.host ;
		 $.ajax({
		    type: 'post',
			url:base_url+'/getappointmentsdate',
			data:{'location':location},
			success: function(doc) {
			  data=JSON.parse(doc);
			var events = [];
			$(data).each(function() {
				var momentObj = moment(this.dateandtime);
				var date=momentObj.format('YYYY-MM-DD[T]HH:mm:ss');
				if(date !='Invalid date'){ 
				    //console.log(date);
    			  events.push({
    				title: '',
    				start:date, // will be parsed
    				end:moment(date).add(datacal.duration, 'minutes').format('YYYY-MM-DD[T]HH:mm:ss') // will be parsed
    			  });
			    }
			}) ;
			callback(events);
		  }
		});
		}

	});

	$('a').removeAttr('data-goto');

	$('.glyphicon-chevron-right').addClass('fas fa-angle-double-right');

	$('.glyphicon-chevron-left').addClass('fas fa-angle-double-left');    
}