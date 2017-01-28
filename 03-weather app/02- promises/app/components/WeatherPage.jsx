var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var WeatherPage = React.createClass({
    render: function () {
        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm />
                <WeatherMessage />
            </div>
        );
    }
});

module.exports = WeatherPage;