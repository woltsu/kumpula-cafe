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
        if (this.state.showExactum) {
            exactumDisplay = "block";
            chemicumDisplay = "none";
        } else {
            exactumDisplay = "none";
            chemicumDisplay = "block";
        }
        return (
            <div class="container" >
                <div class="row text-center" >
                    <div class="col-md-12 col-xs-12">
                        <button class="btn btn-primary"  onClick={this.changeMenu} style={{ marginTop: "2%", marginBottom: "2%" }} >
                            change restaurant
                        </button>
                    </div>
                    <div class="col-md-12 col-xs-12" style={{ display: "block" }} >
                        <div style={{ display: exactumDisplay }} >
                            <h1>Exactum</h1>
                            <hr />
                            <Menu restaurant={exactumURL} />
                        </div>
                        <div style={{ display: chemicumDisplay }} >
                            <h1>Chemicum</h1>
                            <hr />
                            <Menu restaurant={chemicumURL} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("app"));