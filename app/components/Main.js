var React = require('react');
var TopNav = require('TopNav');

var Main = (props) => {
  return (
    <div>
      <TopNav/>
      <div className="row">
        <div className="small-12 medium-6 small-centered columns">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
