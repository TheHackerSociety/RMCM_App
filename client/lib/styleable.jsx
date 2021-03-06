Styles = {
  base: {
    fontFamily: "'Open Sans', sans-serif"
  }
};


Styleable = function( component ){
  component.prototype.styles = function( name ){
    var styles = [];
    styles.push( Styles.base );

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
        styles.push( this.defaultStyles['component'] );
      }
    }else{
      if( this.defaultStyles ){
        styles.push( this.defaultStyles[name] );
      }
    }

    return  styles;
  }

  return Radium( component );
}
