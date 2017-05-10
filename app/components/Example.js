const React = require('react');
const {Link} = require('react-router');

var Example = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a couple of example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?city=Taiyuan">Taiyuan, China</Link>
        </li>
        <li>
          <Link to="/?city=Sunnyvale">Sunnyvale, CA</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Example;
