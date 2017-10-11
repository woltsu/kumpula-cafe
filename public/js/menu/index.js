var React = require("react");
var ReactDOM = require("react-dom");
var WeeklyMenu = require("./weekly-menu");
var DailyMenu = require("./daily-menu");
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
        let otherRestaurant;
        var today = dateTool.today();
        let menu;
        let buttonDisplay;
        let buttonTextValue;
        if (this.state.showDaily) {
            menu = <DailyMenu date={today} />;
            buttonDisplay = "none";
            buttonTextValue = "Weekly";
        } else {
            buttonDisplay = "block";
            buttonTextValue = "Daily";
            if (this.state.showExactum) {
                restaurant = "Exactum";
                otherRestaurant = "Chemicum";
                menu = <WeeklyMenu restaurant={exactumURL} key="1" />;
            } else {
                restaurant = "Chemicum";
                otherRestaurant = "Exactum";
                menu = <WeeklyMenu restaurant={chemicumURL} key="2" />;
            }
        }
        return (
            <div >
                <div style={{ position: "fixed", top: "5px", left: "50%", transform: "translateX(-50%)", zIndex: "1"}}>
                    <h2><b>{ restaurant }</b></h2>
                </div>
                <div class="container">
                    <div class="row text-center" >
                        <div class="col-12">
                            {menu}
                        </div>
                    </div>
                </div>
                <div style={{ position: "fixed", bottom: "10px", right: "2%", display: buttonDisplay }} class="text-center" >
                    <button class="btn btn-sample" onClick={this.changeMenu} >
                        {otherRestaurant}
                    </button>
                    <br />
                </div>
                <div style={{ position: "fixed", bottom: "10px", left: "2%" }} class="text-center" >
                    <button class="btn btn-sample" onClick={this.showDaily} style={{}} >
                        {buttonTextValue}
                    </button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("app"));