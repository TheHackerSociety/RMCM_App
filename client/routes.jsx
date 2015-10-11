const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
const {Router, Route, Link, IndexRoute, history, History, Redirect} = ReactRouter;

const browserHistory = history.createHistory();

App = React.createClass({
  render:function(){
    const { pathname } = this.props.location;

    return (<div>{this.props.children}</div>);
    /*  <ReactCSSTransitionGroup component="div" transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionName="example" transitionAppear={true} transitionAppearTimeout={500} >
        {React.cloneElement(this.props.children || <div />, { key: pathname })}
      </ReactCSSTransitionGroup>
    </div>);*/
  }
});

Meteor.startup(function() {
  React.render((
    <Router history={browserHistory}>
      <Redirect from="/" to="/events" />
      <Route path="/" component={App}/>
        <Route path="/events" component={EventsIndex} key='events'/>
        <Route path="/events/:_id" component={EventsDetails} key='event'/>
        <Route path="/map" component={EventsMap}/>
      <Route/>
    </Router>
  ),document.getElementsByTagName('body')[0]);
});
