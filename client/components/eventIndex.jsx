EventsIndex = Styleable(React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function(){
<<<<<<< HEAD
    var loc = Geolocation.currentLocation() ?
      Geolocation.currentLocation().coordinates :
      {lat: 0, lng: 0};


    let events = Events.find().fetch().map(function(e){
      e.url = '/events/' + e._id;
      e.distance = Distance( loc, e.geocode );
=======
    // console.log(Geolocation.latLng());
    let events = Events.find().fetch().map(function(e){
      e.url = '/events/' + e._id;
      e.distance = '-';
>>>>>>> 61653815d390a5c5f481a902361d59416451bd00
      return e;
    });


    // fetch your metoer data here for reactivity
    return {
      events: events,
<<<<<<< HEAD
      loc: Geolocation.latLng()
=======
      geolocation: Session.get('geolocation')
>>>>>>> 61653815d390a5c5f481a902361d59416451bd00
    };
  },

  render(){
    let geolocation = this.data.geolocation;
    let events = _.map(this.data.events, function(e){
      return <EventsSummary event={e} key={e._id} geolocation={geolocation} />;
    });
    return (<div>
      {events}
    </div>);
  }
}));
