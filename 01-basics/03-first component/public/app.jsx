var Greeter = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hello React!!!</h1>
                <p>Some text</p>
            </div>
        );
    }
});

ReactDOM.render(
    <Greeter/>,
    document.getElementById('app')
);