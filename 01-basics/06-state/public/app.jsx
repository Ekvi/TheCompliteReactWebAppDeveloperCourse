var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: "React",
            message: "This is from a component"
        }
    },

    getInitialState: function () {
        return {
            name: this.props.name
        };
    },

    onButtonClick: function (e) {
        e.preventDefault();

        let nameRef = this.refs.name;

        let name = nameRef.value;
        nameRef.value = "";

        if(typeof name === 'string' && name.length > 0) {
            this.setState({
                name: name
            });
        }
    },

    render: function () {
        let name = this.state.name;
        let message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!!!</h1>
                <p>{message}</p>
                <p>second name {this.props.secondName}</p>

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
});

var firstName = 'Dmitry';

ReactDOM.render(
    <Greeter name={firstName} secondName="John" message="new text"/>,
    document.getElementById('app')
);