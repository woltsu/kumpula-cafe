var React = require("react");
var ReactDOM = require("react-dom");
var Menu = require("./menu");
var dateTool = require("../../../utils/dateTool");

class DailyMenu extends React.Component {
    render() {
        return <Menu date={dateTool.today} />
    }
}

ReactDOM.render(<DailyMenu />, document.getElementById("app"));