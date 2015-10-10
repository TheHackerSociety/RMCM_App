EventsSummary = Styleable(React.createClass({
  name: "event-summary",
  mixins: [ReactMeteorData],
  
  getMeteorData: function(){
    // fetch your metoer data here for reactivity
    return {
      events: Events.findOne()
    };
  },

  // propTypes: {
  //   event: React.PropTypes.object.isRequired
  // },

  defaultStyles: {
    backgroundColor: "#b9d5fd",
    color: "white",
    height: "240px",
    title: {
      backgroundColor: "#4b74ae",
      color: "white",
      fontSize: '15px'
    }
  },

  render(){
    console.log(this);
    return (<div style={this.styles()}>
        <div style={this.styles('title')}>
          <h3>fri<br/>oct</h3>
          <h2>28</h2>
          <h2>2.14</h2>
          <h3>Miles<br/>Away</h3>
        </div>
        <div style={this.styles('body')}>
          <h3>{this.data.events}</h3>
          <p>914 Teetshorn St.</p>
          <p>10:30am - 4:00pm</p>
        </div>
    </div>);
  }
}));
