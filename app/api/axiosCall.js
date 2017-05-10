const axios = require('axios');
const URL = "http://api.openweathermap.org/data/2.5/weather?appid=fea8978188f04e631a4ba8196b3be481&units=imperial";

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var url = `${URL}&q=${encodedLocation}`;
    return axios.get(url);
  }
};
