/*** EVENTS ***/

if (Events.find().count() === 0) { 
    Events.insert(
    {
        name: 'RP Harris Elementary',
        address: '1262 Mae Dr.',
        zip: '77015',
        date: '',
        hours: '9:00am-11:15am and 1:00pm-2:00pm'
    });
}