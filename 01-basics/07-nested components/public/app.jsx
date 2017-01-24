var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}</h1>
                <p>Some paragraph {message}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        let name = this.refs.name.value;
        if(name.length > 0) {
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
    },

    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
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
            name: this.props.name
        };
    },

    handleNewName: function (name) {
        this.setState({
            name: name
        });
    },

    render: function () {
        let name = this.state.name;
        let message = this.props.message;

        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName} />
            </div>
        );
    }
});

var firstName = 'Dmitry';

ReactDOM.render(
    <Greeter />,
    document.getElementById('app')
);