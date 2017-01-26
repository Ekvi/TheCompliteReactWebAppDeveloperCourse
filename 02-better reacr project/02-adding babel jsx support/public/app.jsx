var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}</h1>
                <p>{message}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if(name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }

        if(message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }

        this.props.onNewData(updates);
    },

    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="name" placeholder="name"/>
                    <br/>
                    <textarea ref="message" cols="35" rows="4" placeholder="message" />
                    <br/>
                    <button>Change</button>
                </form>
            </div>
        );
    }
});

var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: "React",
            message: "Default message"
        }
    },

    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },

    handleNewData: function (updates) {
        this.setState(updates);
    },

    render: function () {
        let name = this.state.name;
        let message = this.state.message;

        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleNewData} />
            </div>
        );
    }
});

ReactDOM.render(
    <Greeter />,
    document.getElementById('app')
);