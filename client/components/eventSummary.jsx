EventsSummary = Styleable(React.createClass({
  name: "event-summary",

  /*propTypes: {
    event: React.PropTypes.object.isRequired
  },*/

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
    return (<div style={this.styles()}>
        <div style={this.styles('title')}>
          <h3>fri<br/>oct</h3>
          <h2>28</h2>
          <h2>2.14</h2>
          <h3>Miles<br/>Away</h3>
        </div>
        <div style={this.styles('body')}>
          <h3>McDonald's</h3>
          <p>914 Teetshorn St.</p>
          <p>10:30am - 4:00pm</p>
        </div>
    </div>);
  }
}));
