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
    },
    'dayMonth': {
      fontSize: '12px'
    },
    'date': {
      fontSize: '28px'
    },
    'distance': {
      color: '#ffc829',
      float: 'right',
      fontSize: '28px'
    },
    'distance-text': {
      color: '#ffc829',
      fontSize: '12px',
      float: 'right'
    }
  },

  render(){
    return (<div style={this.styles()}>
      <div style={this.styles('title')}>
        <h3 style={this.styles('dayMonth')}>fri<br/>oct</h3>
        <h2 style={this.styles('date')}>28</h2> 
        <h3 style={this.styles('distance-text')}>Miles<br/>Away</h3>
        <h2 style={this.styles('distance')}>2.14</h2>
      </div>
      <div style={this.styles('body')}>
        <h3>McDonald's</h3>
        <p>914 Teetshorn St.</p>
        <p>10:30am - 4:00pm</p>
      </div>
    </div>);
  }
}));
