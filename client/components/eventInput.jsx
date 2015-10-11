EventsInput = Styleable(React.createClass({
  name: "eventInput",

  propTypes: {
    event: React.PropTypes.object.isRequired
  },

  defaultStyles: {
    component: {
      height: "50px",
      width: "100%",
      fontSize: "20px",
    }
  },

  getInitialState: function() {
      return {value: 'Address or Zip'};
  },

  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  render() {
    var value = this.state.value;
    return <input style={this.styles()} type="text" value={value} onChange={this.handleChange} />;
  }
}));
