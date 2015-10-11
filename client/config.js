Meteor.startup(function () {
	Meteor.subscribe('events');
	
	
	Session.setDefault('geolocation',null);

	Tracker.autorun(function (computation) {
	  // userGeoLocation.set(Geolocation.latLng());
	  if (Geolocation.latLng()) {
	    //stop the tracker if we got something
	    Session.set('geolocation',Geolocation.latLng());
	    computation.stop();
	  }
	});
});