EventsIndex = Styleable(React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function(){
    let events = Events.find().fetch().map(function(e){
      e.url = '/events/' + e._id;
      e.distance = DistanceFrom( e.geocode );
      return e;
    });

    // fetch your metoer data here for reactivity
    return {
      events: _.sortBy(events,'distance'),
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
