const webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    'app/app.js'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: 'public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main',
      TopNav: 'app/components/TopNav',
      Weather: 'app/components/Weather',
      WeatherForm: 'app/components/WeatherForm',
      WeatherMessage: 'app/components/WeatherMessage',
      About: 'app/components/About',
      Example: 'app/components/Example',
      Modal: 'app/components/Modal',
      axiosCall: 'app/api/axiosCall',
      appSass: 'app/styles/app.scss'
    },
    extensions: ['', '.jsx', '.js']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
};
