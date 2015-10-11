EventsIndex = Styleable(React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function(){
    let events = Events.find().fetch().map(function(e){
      e.url = '/events/' + e._id;
      e.distance = DistanceCalc.distance( e.geocode );
      return e;
    });

    // fetch your metoer data here for reactivity
    return {
      events: events
    };
  },

  render(){
    let events = _.map(this.data.events, function(e){
      return <EventsSummary event={e} key={e._id}/>;
    });
    return (<div>
      {events}
    </div>);
  }
}));
