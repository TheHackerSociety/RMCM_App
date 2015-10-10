Styles = {
  helloworld: { 
    'fontSize': "50px",
    'color': 'blue'
  },
};


Styleable = function( component ){
  component.prototype.styles = function( name ){
    var styles = [];
    if( this.name ){
      if( name ){
        if( Styles[ this.name ] ){
          styles.push( Styles[ this.name ][ name ] );
        }
        if( this.defaultStyles ){
          styles.push( this.defaultStyles[name] ); 
        }
      }else{
        styles.push( Styles[ this.name ] );
        styles.push( this.defaultStyles ); 
      }
    }

    return  styles;
  }

  return Radium( component );
}
