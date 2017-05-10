const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const Modal = require('Modal');
const axiosCall = require('axiosCall');
const {browserHistory} = require('react-router');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
      errorMessage: undefined,
      city: undefined,
      temperature: undefined
    };
  },
  render: function() {
    var {city, temperature, errorMessage, isLoading} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <p className="text-center">Fetching weather...</p>
      } else {
        if (typeof city !== 'undefined' && typeof temperature !== 'undefined') { //You should never use non-strict comparison for numbers
          return <WeatherMessage city={city} temperature={temperature}/>
        }
      }
    };
    var weatherInstance = this;
    function renderErrorModal () {
      if (typeof errorMessage === 'string') {
        return (
          <Modal message={errorMessage}
            onClose={function() {
              weatherInstance.setState({
                errorMessage: undefined
              });
            }
          }/>
        )
      }
    };
    return (
      <div>
        <h1 className="text-center page-title">Get Weather by City</h1>
        <WeatherForm getWeather={this.getWeather}/>
        {renderMessage()}
        {renderErrorModal()}
      </div>
    );
  },
  componentDidMount: function() {
    var city = this.props.location.query.city;
    if (typeof city === 'string' && city.length > 0) {
      var object = {};
      object.city = city;
      this.getWeather(object);
      browserHistory.push('/');
    }
  },
  componentWillReceiveProps: function(newProps) {
    var city = newProps.location.query.city;
    if (typeof city === 'string' && city.length > 0) {
      var object = {};
      object.city = city;
      this.getWeather(object);
      browserHistory.push('/');
    }
  },
  getWeather: function(object) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      city: undefined,
      temperature: undefined
    });
    axiosCall.getTemp(object.city).then((response) => {
      if (response) {
        if (response.status === 200 && response.statusText === "OK") {
          var data = response.data;
          if (data) {
            var main = data.main;
            var city = data.name;
            if (main) {
              var temperature = main.temp;
              this.setState({
                city: city,
                temperature: Math.floor(temperature),
                isLoading: false,
                errorMessage: undefined
              });
            }
          }
        }
      }
    }).catch((error) => {
      if (error) {
        this.setState({
          city: undefined,
          temperature: undefined,
          isLoading: false,
          errorMessage: 'Unable to fetch weather for that city.'
        });
      }
    });
  }
});

module.exports = Weather;
