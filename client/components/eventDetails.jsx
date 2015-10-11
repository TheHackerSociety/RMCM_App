const {Link} = ReactRouter;

EventsDetails = Styleable(React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function(){
    let id = this.props.params._id;

    let event = Events.findOne({_id: id});
    if( event ){
      event.distance = DistanceFrom( event.geocode );
    }


    return {
      event: event,
    };
  },

  defaultStyles: {
    back: {
      margin: '20px',
      color: 'black',
      fontWeight: 'bold'
    },
    generalInfo: {
      padding: '20px'
    },
    services: {
      padding: '20px',
      listStyleType: 'disc'
    }
  },

  render(){
    let event = this.data.event;
    if( !event ){ return (<div></div>); }

    return (<div>
      <Link to='/events'><div style={this.styles('back')}>&#10092; Back</div></Link>
      <EventsMap event={event}/>
      <EventsSummary event={event}/>
      <div style={this.styles('generalInfo')}>
        <p>
          Ronald McDonald Care Mobile <strong>FREE</strong> capabilities and pediatric
          primary care services provided will vary by each community&apos;s needs and may
          include:
        </p>
        <ul style={this.styles('services')}>
          <li>Immunizations</li>
          <li>Well-child visits</li>
          <li>Ill or urgent care visits</li>
          <li>Body Mass Index calculations and nutrition counseling</li>
          <li>Developmental Screenings</li>
          <li>Vision and hearing screening</li>
          <li>Free medicine for uninsured children through on-site TCH pharmacy</li>
          <li>School physicals - general and sports related</li>
          <li>Blood collection and point of care testing</li>
          <li>Childhood health education and injury prevention education.</li>
          <li>Specialty care referrals including mental health and social service referrals</li>
        </ul>
      </div>
    </div>);
  }
}));
