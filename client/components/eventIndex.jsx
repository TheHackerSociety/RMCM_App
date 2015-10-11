EventsIndex = Styleable(React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function(){
    // fetch your metoer data here for reactivity
    return {
      events: Events.find().fetch()
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
