const {Link} = ReactRouter;

EventsDetails = Styleable(React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function(){
    let id = this.props.params._id;

    return {
      event: Events.findOne({_id: id})
    };
  },

  defaultStyles: {
    back: {
      margin: '20px',
      color: 'black',
      fontWeight: 'bold'
    }
  },

  render(){
    let event = this.data.event;
    if( !event ){ return (<div></div>); }

    return (<div>
      <Link to='/events'><div style={this.styles('back')}>&#10092; Back</div></Link>
      <EventsSummary event={event}/>
    </div>);
  }
}));
