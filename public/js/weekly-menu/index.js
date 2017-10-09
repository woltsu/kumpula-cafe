var React = require("react");
var ReactDOM = require("react-dom");
var WeeklyMenu = require("./menu");
var DailyMenu = require("../daily-menu/menu");
var dateTool = require("../../../utils/dateTool");
var exactumURL = "https://messi.hyyravintolat.fi/publicapi/restaurant/11/";
var chemicumURL = "https://messi.hyyravintolat.fi/publicapi/restaurant/10/";


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showExactum: true,
            showDaily: true
        }
        this.changeMenu = this.changeMenu.bind(this);
        this.showDaily = this.showDaily.bind(this);
    }

    changeMenu() {
        var newState = !this.state.showExactum;
        this.setState({
            showExactum: newState
        });
    }

    showDaily() {
        var newState = !this.state.showDaily;
        this.setState({
            showDaily: newState
        });
    }

    render() {
        let restaurant;
        var today = dateTool.today();
        let menu;
        let buttonDisplay;
        let buttonTextValue;
        if (this.state.showDaily) {
            menu = <DailyMenu date={today} />;
            buttonDisplay = "none";
            buttonTextValue = "Daily";
        } else {
            buttonDisplay = "block";
            buttonTextValue = "Weekly";
            if (this.state.showExactum) {
                restaurant = "Exactum";
                menu = <WeeklyMenu restaurant={exactumURL} key="1" />;
            } else {
                restaurant = "Chemicum";
                menu = <WeeklyMenu restaurant={chemicumURL} key="2" />;
            }
        }
        return (
            <div >
                <div class="container">
                    <div class="row text-center" >
                        <div class="col-md-12 col-xs-12" style={{ display: "block" }} >
                            <h1>{restaurant}</h1>
                            {menu}
                        </div>
                    </div>
                </div>
                <div style={{ position: "fixed", bottom: "10px", right: "10px", display: buttonDisplay }} class="text-center" >
                    <button class="btn btn-primary" onClick={this.changeMenu} >
                        {restaurant}
                    </button>
                    <br />
                </div>
                <div style={{ position: "fixed", bottom: "10px", left: "10px" }} class="text-center" >
                    <button class="btn btn-primary" onClick={this.showDaily} style={{}} >
                        {buttonTextValue}
                    </button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("app"));