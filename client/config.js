Meteor.startup(function () {
	Meteor.subscribe('events');
<<<<<<< HEAD
});
=======
	
	
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
>>>>>>> 61653815d390a5c5f481a902361d59416451bd00
