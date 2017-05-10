const React = require('react');
const {Link, IndexLink, browserHistory} = require('react-router');

var TopNav = React.createClass({
  componentDidMount: function(){
    $(this.getDOMNode()).foundation();
  },
  render: function() {
    return (
      <div>
        <div className="title-bar" data-responsive-toggle="topBar" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle="topBar"></button>
          <div className="title-bar-title">Menu</div>
        </div>
        <div className="top-bar" id="topBar">
          <div>
            <div className="top-bar-left">
              <ul className="menu">
                <li>
                  <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                </li>
                <li>
                  <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                </li>
                <li>
                  <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
                </li>
              </ul>
            </div>
            <div className="top-bar-right">
              <form onSubmit={this.onSearch} className="menu">
                <li>
                  <input type="search" placeholder="Enter city name" ref="searchInput"/>
                </li>
                <li>
                  <input type="submit" className="button" value="Get Weather"/>
                </li>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  },
  onSearch: function(event) {
    event.preventDefault();
    var searchRef = this.refs.searchInput;
    if (searchRef.value.length > 0) {
      var city = searchRef.value;
      searchRef.value = '';

      var encodedCity = encodeURIComponent(city);
      browserHistory.push('/?city=' + encodedCity);
    }
  }
});

module.exports = TopNav;
