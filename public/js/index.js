var React = require("react");
var ReactDOM = require("react-dom");
var Menu = require("./menu");
var exactumURL = "https://messi.hyyravintolat.fi/publicapi/restaurant/11/";
var chemicumURL = "https://messi.hyyravintolat.fi/publicapi/restaurant/10/";


class Index extends React.Component {
    render() {
        return (
            <div class="container" >
                <div class="row" >
                    <div class="col" >
                        <h1>Exactum</h1>
                        <Menu restaurant={exactumURL} />
                    </div>
                    <div class="col">
                        <h1>Chemicum</h1>
                         <Menu restaurant={chemicumURL} />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("app"));