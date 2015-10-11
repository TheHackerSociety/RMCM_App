EventsIndex = Styleable(React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function(){
    // console.log(Geolocation.latLng());
    let events = Events.find().fetch().map(function(e){
      e.url = '/events/' + e._id;
      e.distance = '-';
      return e;
    });
    // fetch your metoer data here for reactivity
    return {
      events: events,
      geolocation: Session.get('geolocation')
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
