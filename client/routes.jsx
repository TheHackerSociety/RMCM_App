const {Router, Route, Link, IndexRoute, history, History} = ReactRouter;

const browserHistory = history.createHistory();

App = React.createClass({
  render:function(){
    return (<div>  
      {this.props.children}
    </div>);
  }
});

console.log( ReactMeteorData );

HelloWorld = Styleable(React.createClass({
  name: "helloworld",
  
  getMeteorData: function(){
    // fetch your metoer data here for reactivity
    return {here: 'test'};
  },

  render(){
    return (<h2 style={this.styles()}>{this.data.here}</h2>);
  }
}));

Meteor.startup(function() {
  React.render((
    <Router history={browserHistory}>
      <Route path="/helloWorld" component={HelloWorld}/>
      <Route path="/events" component={EventsSummary}/>
    </Router>
  ),document.getElementsByTagName('body')[0]);
});
