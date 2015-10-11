const {Link} = ReactRouter;

EventsSummary = Styleable(React.createClass({
  name: "eventSummary",

  propTypes: {
    event: React.PropTypes.object.isRequired
  },

  defaultStyles: {
    component: {
      color: "white",
      height: "240px",
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      backgroundColor: "#4b74ae",
      display: 'flex',
      alignItems: 'center',
      color: "white",
      padding: '20px'
    },
    'dayMonth': {
      fontSize: '12px',
      paddingRight: '8px'
    },
    'date': {
      fontSize: '28px',
    },
    'space': {
      flexGrow: 1
    },
    'distance': {
      color: '#ffc829',
      fontSize: '28px',
      paddingRight: '8px'
    },
    'distanceText': {
      color: '#ffc829',
      fontSize: '12px',
    },
    'body': {
      backgroundColor: '#628ecc',
      padding: '20px',
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
    },
    'location': {
      fontSize: '18px',
      flexGrow: 1,
    },
    'address': {
      flexGrow: 1,
    }
  },

  render(){
    let event = this.props.event;
    let geolocation = this.props.geolocation;
// console.log(geolocation);
    // Should this be passed in via context or props?
    let date = moment.utc( event.date ).tz( Meteor.settings.public.timezone );
    let day = date.format('ddd');
    let month = date.format('MMM');
    let dateOfMonth = date.format('DD');
    let distance = event.distance;
    if(geolocation){
      let meters = geolib.getDistance(
          {
            latitude: geolocation.lat,
            longitude: geolocation.lng
          }, 
          {
            latitude: event.latitude,
            longitude: event.longitude
        });
      distance = meters * 0.000621371;
      distance = distance.toFixed(2);
      // console.log(distance);
    }
    let component = (<div style={this.styles()}>
      <div style={this.styles('title')}>
        <h3 style={this.styles('dayMonth')}>{day}<br/>{month}</h3>
        <h2 style={this.styles('date')}>{dateOfMonth}</h2>
        <div style={this.styles('space')}></div>
        <h2 style={this.styles('distance')}>{distance}</h2>
        <h3 style={this.styles('distanceText')}>Miles<br/>Away</h3>
      </div>
      <div style={this.styles('body')}>
        <h3 style={this.styles('location')}>{event.name}</h3>
        <div style={this.styles('address')}>
          <p style={this.styles('street')}>{event.address}</p>
          <p style={this.styles('cityStateZip')}>{event.city}, {event.state} {event.zip}</p>
        </div>
        <p style={this.styles('hours')}>{event.hours}</p>
      </div>
    </div>);

    // XXX Bug in Radium means removing link is difficult
    //if( event.url ){
      //let Link = Radium( Link );
      if( !event.url ){ event.url = '/events/' + event._id; }
      return (<Link to={event.url}>{component}</Link>)
    //}else{
    //  return ({component});
    //}
  }
}));
