const React = require('react');

var Modal = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired,
    onClose: React.PropTypes.func.isRequired
  },
  getDefaultProps: function() {
    return {
      title: 'Error'
    };
  },
  render: function() {
    var {title, message, onClose} = this.props;
    return (
      <div className="reveal-overlay" style={{"display": "block"}}>
        <div className="reveal text-center" style={{"display": "block", "top": 233}}>
          <h4>{title}</h4>
          <p>{message}</p>
          <p>
            <button className="button hollow" onClick={onClose}>
              Close
            </button>
          </p>
        </div>
      </div>
    );
  }
});

module.exports = Modal;
