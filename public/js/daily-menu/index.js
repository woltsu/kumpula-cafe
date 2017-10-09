var React = require("react");
var ReactDOM = require("react-dom");
var Menu = require("./menu");
var dateTool = require("../../../utils/dateTool");

class DailyMenu extends React.Component {
    render() {
        var date = dateTool.today();
        return (
            <div>
                <div class="row">
                    <div class="col-12 text-center">
                        <h1>{date}</h1>
                    </div>
                </div>
                <Menu date={date} />
            </div>
        );
    }
}

ReactDOM.render(<DailyMenu />, document.getElementById("app"));