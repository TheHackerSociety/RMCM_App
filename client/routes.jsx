const {Router, Route, Link, IndexRoute, history, History} = ReactRouter;

const browserHistory = history.createHistory();

App = React.createClass({
  render:function(){
    return (<div>
      {this.props.children}
    </div>);
  }
});

Meteor.startup(function() {
  React.render((
    <Router history={browserHistory}>
      <Route path="/events" component={EventsIndex}/>
      <Route path="/events/:_id" component={EventsDetails}/>
    </Router>
  ),document.getElementsByTagName('body')[0]);
});
