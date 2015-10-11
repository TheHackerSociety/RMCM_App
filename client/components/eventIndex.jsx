EventsIndex = Styleable(React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function(){
    var loc = Geolocation.currentLocation() ?
      Geolocation.currentLocation().coordinates :
      {lat: 0, lng: 0};


    let events = Events.find().fetch().map(function(e){
      e.url = '/events/' + e._id;
      e.distance = Geolocation.latLng();
      return e;
    });


    // fetch your metoer data here for reactivity
    return {
      events: events,
      loc: Geolocation.latLng()
    };
  },

  render(){
    let geolocation = this.data.loc;
    let events = _.map(this.data.events, function(e){
      return <EventsSummary event={e} key={e._id} geolocation={geolocation} />;
    });
    return (<div>
      {events}
    </div>);
  }
}));
