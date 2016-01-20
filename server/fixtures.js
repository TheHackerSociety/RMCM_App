/*** EVENTS ***/

if (Events.find().count() === 0) {
	// using plain geocoder uses google by default and has a rate limit of 10 requests/sec
	// i put a sleep on the 10th item for right now to circumvent hitting the limit
	let geo = new GeoCoder();
	let geocode = geo.geocode('1262 Mae Dr.' + ',' + '77015')[0];
	Events.insert(
	    {
	        name: 'RP Harris Elementary',
	        address: '1262 Mae Dr.',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77015',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-01-2016'),
	        hours: '9:00am-11:15am and 1:00pm-2:00pm'
	    });
	geocode = geo.geocode('8100 Elrod ' + ',' + '77017')[0];
	Events.insert(
	    {
	        name: 'Bonner Elementary',
	        address: '8100 Elrod ',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77017',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-22-2016'),
	        hours: '9:00am-11:15am and 1:00pm-2:00pm'
	    });
	geocode = geo.geocode('8100 Elrod ' + ',' + '77017')[0];
	Events.insert(
	    {
	        name: 'Bonner Elementary',
	        address: '8100 Elrod ',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77017',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-08-2016'),
	        hours: '9:00am-11:15am and 1:00pm-2:00pm'
	    });
	geocode = geo.geocode('6301 S. Loop East ' + ',' + '77087')[0];
	Events.insert(
	    {
	        name: 'Brookline Elementary',
	        address: '6301 S. Loop East ',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77087',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-27-2016'),
	        hours: '9:00am-11:15am and 1:00pm-2:00pm'
	    });
	geocode = geo.geocode('1500 Binz St. ' + ',' + '77004')[0];
	Events.insert(
	    {
	        name: 'Children\'s Museum',
	        address: '1500 Binz St. ',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77004',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-08-2016'),
	        hours: '5:00pm-7:00pm'
	    });
	geocode = geo.geocode('7524 Ave E' + ',' + '77012')[0];
	Events.insert(
	    {
	        name: 'Community Family Centers',
	        address: '7524 Ave E',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77012',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-28-2016'),
	        hours: '9:00am-11:15am and 1:00pm-2:00pm'
	    });
	geocode = geo.geocode('7475 Westover ' + ',' + '77087')[0];
	Events.insert(
	    {
	        name: 'Cornelius Elementary',
	        address: '7475 Westover ',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77087',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-05-2016'),
	        hours: '9:00am-11:15am and 1:00pm-2:00pm'
	    });
	geocode = geo.geocode('7414 Fairway ' + ',' + '77087')[0];
	Events.insert(
	    {
	        name: 'Golfcrest Elementary',
	        address: '7414 Fairway ',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77087',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-07-2016'),
	        hours: '9:00am-11:15am and 1:00pm-2:00pm'
	    });
	geocode = geo.geocode('7414 Fairway ' + ',' + '77087')[0];
	Events.insert(
	    {
	        name: 'Golfcrest Elementary',
	        address: '7414 Fairway ',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77087',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-21-2016'),
	        hours: '9:00am-11:15am and 1:00pm-2:00pm'
	    });
	geocode = geo.geocode('2436 Gessner Dr' + ',' + '77042')[0];
	Events.insert(
	    {
	        name: 'Hillendahl Library',
	        address: '2436 Gessner Dr',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77042',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-13-2016'),
	        hours: '10:00am-2:00pm'
	    });
	Meteor._sleepForMs(2000);
	geocode = geo.geocode('1262 Mae Dr. ' + ',' + '77015')[0];
	Events.insert(
	    {
	        name: 'RP Harris Elementary',
	        address: '1262 Mae Dr. ',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77015',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-15-2016'),
	        hours: '9:00am-11:15am and 1:00pm-2:00pm'
	    });
	geocode = geo.geocode('6745 Tipperary Lane' + ',' + '77061')[0];
	Events.insert(
	    {
	        name: 'Lewis Elementary',
	        address: '6745 Tipperary Lane',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77061',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-06-2016'),
	        hours: '9:00am-11:15am and 1:00pm-2:00pm'
	    });
	geocode = geo.geocode('6745 Tipperary Lane' + ',' + '77061')[0];
	Events.insert(
	    {
	        name: 'Lewis Elementary',
	        address: '6745 Tipperary Lane',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77061',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-20-2016'),
	        hours: '9:00am-11:15am and 1:00pm-2:00pm'
	    });
	geocode = geo.geocode('3223 Spencer Hwy.Pasadena' + ',' + '77504')[0];
	Events.insert(
	    {
	        name: 'McDonald\'s Spencer',
	        address: '3223 Spencer Hwy.Pasadena',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77504',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-19-2016'),
	        hours: '9:00am-11:15am and 1:00pm-2:00pm'
	    });
	geocode = geo.geocode('13457 E Frwy Service Rd' + ',' + '77015')[0];
	Events.insert(
	    {
	        name: 'North Channelview WIC',
	        address: '13457 E Frwy Service Rd',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77015',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-12-2016'),
	        hours: '9:00am-11:15am and 1:00pm-2:00pm'
	    });
	geocode = geo.geocode('3223 Wilcrest Dr ' + ',' + '77042')[0];
	Events.insert(
	    {
	        name: 'Robinson Library',
	        address: '3223 Wilcrest Dr ',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77042',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-29-2016'),
	        hours: '10:00am-2:00pm'
	    });
	geocode = geo.geocode('12401 1/2 S. Post Oak' + ',' + '77045')[0];
	Events.insert(
	    {
	        name: 'UT Power WIC',
	        address: '12401 1/2 S. Post Oak',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77045',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-14-2016'),
	        hours: '9:00am-11:15am and 1:00pm-2:00pm'
	    });
	geocode = geo.geocode('7575 Office City Dr' + ',' + '77012')[0];
	Events.insert(
	    {
	        name: 'Willow Creek Community',
	        address: '7575 Office City Dr',
	        geocode: geocode,
	        city: geocode.city,
	        state: geocode.administrativeLevels.level1short,
	        zip: '77012',
	        latitude: geocode.latitude,
	        longitude: geocode.longitude,
	        date: new Date('10-26-2016'),
	        hours: '9:00am-11:15am and 1:00pm-2:00pm'
	    });
}
