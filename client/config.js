Meteor.startup(function () {
	Meteor.subscribe('events');
	var test = Tracker.autorun(function() {
		var geolocation = Geolocation.currentLocation();
		if(geolocation){
				Session.set('geolocation',geolocation);
				console.log('geolocation',geolocation);
				console.log('session',Session.get('geolocation'));
			}
	});
});