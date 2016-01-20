const { Link } = ReactRouter;

Index = React.createClass({
  _setSort(e){
    Session.set('sortType', e.target.innerHTML);
    window.location.pathname = '/events';
  },

  render:function(){
    const { pathname } = this.props.location;

    return (<div>
      <Link to="/events">
        <button onClick={this._setSort}>distance</button>
      </Link>
      <Link to="/events">
        <button onClick={this._setSort}>date</button>
      </Link>
    </div>);
  }
});
