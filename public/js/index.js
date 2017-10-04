var React = require("react");
var ReactDOM = require("react-dom");
var Menu = require("./menu");
var exactumURL = "https://messi.hyyravintolat.fi/publicapi/restaurant/11/";
var chemicumURL = "https://messi.hyyravintolat.fi/publicapi/restaurant/10/";


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showExactum: true
        }
        this.changeMenu = this.changeMenu.bind(this);
    }

    changeMenu() {
        var newState = !this.state.showExactum;
        this.setState({
            showExactum: newState
        });
    }

    render() {
        let exactumDisplay;
        let chemicumDisplay;
        let restaurant;
        if (this.state.showExactum) {
            exactumDisplay = "block";
            chemicumDisplay = "none";
            restaurant = "Exactum";
        } else {
            exactumDisplay = "none";
            chemicumDisplay = "block";
            restaurant = "Chemicum";
        }
        return (
            <div >
                <div class="container">
                    <div class="row text-center" >
                        <div class="col-md-12 col-xs-12" style={{ display: "block" }} >
                            <h1>{restaurant}</h1>
                            <div style={{ display: exactumDisplay }} >
                                <Menu restaurant={exactumURL} />
                            </div>
                            <div style={{ display: chemicumDisplay }} >
                                <Menu restaurant={chemicumURL} />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ position: "fixed", bottom: "10px", right: "10px" }} class="text-center" >
                    <button class="btn btn-primary" onClick={this.changeMenu} style={{}} >
                        change restaurant
                    </button>
                    <br />
                    <label>Current: { restaurant }</label>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("app"));