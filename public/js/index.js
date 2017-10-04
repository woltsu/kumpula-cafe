var React = require("react");
var ReactDOM = require("react-dom");

class Index extends React.Component {
    render() {
        return <h1>Hello world!</h1>;
    }
}

ReactDOM.render(<Index />, document.getElementById("app"));