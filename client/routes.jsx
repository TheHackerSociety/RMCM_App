const {Router, Route, Link, IndexRoute, history, History} = ReactRouter;

const browserHistory = history.createHistory();

App = React.createClass({
  render:function(){
    return (<div>  
      {this.props.children}
    </div>);
  }
});

Styles = {
  helloworld: { 
    'fontSize': "50px",
    'color': 'blue'
  }
};

Styleable = function( component ){
  component.prototype.styles = function( name, defaults ){
    var styles = [];

    if( defaults ){
      styles.push( defaults );
    }else if( this.styles ){
      styles.push( this.defaultStyles ); 
    }

    if( name ){
      styles.push( Styles[ name ] );
    }if( this.name ){
      styles.push( Styles[ this.name ] );
    }

    return  styles;
  }

  return Radium( component );
}

HelloWorld = Styleable(React.createClass({
  name: "helloworld",
  mixin: [ReactMeteorData],
  
  getMeteorData: function(){
    // fetch your metoer data here for reactivity
    return {};
  },

  render(){
    console.log( this );
    return (<h2 style={this.styles()}>Hello world</h2>);
  }
}));

Meteor.startup(function() {
  React.render((
    <Router history={browserHistory}>
      <Route path="/helloWorld" component={HelloWorld}/>
    </Router>
  ),document.getElementsByTagName('body')[0]);
});
