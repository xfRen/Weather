const React = require('react');

var WeatherForm = React.createClass({
  propTypes: {
    getWeather: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div>
          <input type="search" ref="cityInput" placeholder="Enter city name"/>
        </div>
        <div>
          <input type="submit" className="button expanded hollow" value="Get Weather"/>
        </div>
      </form>
    );
  },
  onSubmitHandler: function(event) {
    event.preventDefault();
    var cityInputRef = this.refs.cityInput;
    if (cityInputRef.value.length > 0) {
      var object = {};
      object.city = cityInputRef.value;
      this.props.getWeather(object);
      cityInputRef.value = '';
    }
  }
});

module.exports = WeatherForm;
