const {Router, Route, Link, IndexRoute, history, History} = ReactRouter;

const browserHistory = history.createHistory();

App = React.createClass({
  render:function(){
    return (<div>  
      {this.props.children}
    </div>);
  }
});

HelloWorld = React.createClass({
  mixin: [ReactMeteorData],
  
  getMeteorData: function(){
    // fetch your metoer data here for reactivity
    return {};
  },

  render(){
    return (<h2>Hello world</h2>);
  }
});

Meteor.startup(function() {
  React.render((
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/helloWorld" component={HelloWorld}/>
        </Route>
      </Router>
  ),document.getElementsByTagName('body')[0]);
});
