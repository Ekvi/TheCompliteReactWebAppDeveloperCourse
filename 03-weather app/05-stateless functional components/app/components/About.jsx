var React = require('react');

/*var About = React.createClass({
    render: function () {
        return (
            <h3>About component</h3>
        );
    }
});*/

//for stateless components we can use this syntax
var About = (props) => {
    return (
        <h3>About component</h3>
    );
};

module.exports = About;