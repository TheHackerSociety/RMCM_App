EventsMap = Styleable(React.createClass({
  name: "eventMap",
    //let lat = this.props.latitude;
    //let lng = this.props.longitude;

  defaultStyles: {
    component: {
      width: "100%",
    },
    directions: {
      'marginTop': '-4px',
      backgroundColor: '#ffc829',
      color: 'black',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
    }
  },

  render(){
    let address = this.props.event.address;
    let city = this.props.event.city;
    let zip = this.props.event.zip;
    let completeAddress = `${address}, ${city}, ${zip}`;
    let formattedAddress = encodeURI(completeAddress);
    let href = `https://maps.apple.com/maps?daddr=${formattedAddress}&amp;ll=`;
    let key = Meteor.settings.public.API_KEY;

    return (
      <div>
        <a href={href}>
          <img style={this.styles()} src={`https://maps.googleapis.com/maps/api/staticmap?center=${formattedAddress}&zoom=13&size=600x300&scale=2&maptype=roadmap&markers=size:mid%7Ccolor:blue%7C${formattedAddress}&key=${key}`}/>
          <div style={this.styles('directions')}>Get Directions</div>
        </a>
      </div>);
  }
}));
