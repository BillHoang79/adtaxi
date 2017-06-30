var app = (function(){
	return {
		data: {
			mon: {
				day: 'monday', 
				hours: '9am - 6pm'
			},
			tue: {
				day: 'tuesday', 
				hours: 'closed'
			},
			wed: {
				day: 'wednesday', 
				hours: '9:30am - 4:30pm'
			},
			thur: {
				day: 'thursday', 
				hours: '10am - 4:30pm'
			},
			fri: {
				day: 'friday', 
				hours: '9am - 6pm'
			},
			sat: {
				day: 'saturday', 
				hours: 'closed'
			},
			sun: {
				day: 'sunday', 
				hours: 'closed'
			}
		}
	}
})();

function updateDate(day){
	if(day.innerHTML.toLowerCase() in app.data){
		document.querySelector('.data-time').innerHTML = app.data[day.innerHTML.toLowerCase()].hours;
	}
}

