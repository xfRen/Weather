const React = require('react');

var WeatherMessage = (props) => {
  var {city, temperature} = props;
  return (
    <p className="text-center">In {city}, it is now {temperature}&deg;F</p>
  );
}

module.exports = WeatherMessage;
