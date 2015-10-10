Meteor.publish('events', function() { 
    return Events.find({date: { $gte : new Date()}});
});