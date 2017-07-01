var dataLayer = new Promise(resolve => {
		'use strict';
		// normal HTTP request here - stubbing data
		resolve({
			days: {
				sun: {day: 'sunday',hours: 'CLOSED',id: 0},mon: {day: 'monday',hours: '9am - 6pm',id: 1},tue: {day: 'tuesday',hours: 'CLOSED',id: 2},wed: {day: 'wednesday', hours: '9:30am - 4:30pm',id: 3},thur: {day: 'thursday', hours: '10am - 4:30pm',id: 4},fri: {day: 'friday', hours: '9am - 6pm',id: 5},sat: {day: 'saturday', hours: 'CLOSED',id: 6}
			}
		}); // end data stub
	}).then(response => {
		response.size = (obj => { // getting length of object properties for looping
		    var size = 0, key;
		    for (key in obj) {
		        if (obj.hasOwnProperty(key)) size++;
		    }
		    return size;
		})(response.days);

		return response; // returning response for next in promise chain
	}).then(response => {

		var key, id;
		// getting current day to initialize data and preselect current day that we are on
		response.currentDay = (day => {

			for (key in response.days) {
				for (id in response.days[key]) {
					if(response.days[key].id === day ){
						// initialize selected time for today's selection
						document.querySelector('.data-time').innerHTML = response.days[key].hours;
						// initialize selected button option with today's day
						document.getElementById(response.days[key].day).classList.add('selected');
						return response.days[key]
					}
				}
			}
		})(new Date().getDay());
		// hijacking dataLayer variable and returning response value
		return dataLayer = response;
	}),
	updateData = day => {
		// 
		buttonParent.querySelector('.selected').classList.remove('selected');
		day.classList.add('selected');
	
		if(day.innerHTML.toLowerCase() in dataLayer.days){
			document.querySelector('.data-time').innerHTML = dataLayer.days[day.innerHTML.toLowerCase()].hours;
		}

		if(dataLayer.days[day.innerHTML.toLowerCase()].hours == "CLOSED"){
			openNow.classList.add('hidden');
		} else {
			if(openNow.classList.contains('hidden')){
				openNow.classList.remove('hidden');
			}
		}

	},
	openNow = document.querySelector('.open-now'),
	buttonParent = document.querySelector('.dayList');
