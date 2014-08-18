/** @jsx React.DOM */

var Footer = require('./Footer.react');
var Header = require('./Header.react');
var Main   = require('./Main.react');

var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
});
