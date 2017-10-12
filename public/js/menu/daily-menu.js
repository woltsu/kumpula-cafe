var React = require("react");
var style = require("./style");
var Info = require("./food-info");

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: []
        };
        this.getDailyMenu = this.getDailyMenu.bind(this);
    }

    getDailyMenu() {
        var uri = "/api/menu/" + this.props.date;
        $.ajax({
            method: "get",
            url: uri,
            success: function (res) {
                this.setState({
                    menu: res
                });
            }.bind(this)
        });
    }

    componentDidMount() {
        this.getDailyMenu();
    }

    render() {
        return (
            <div>
                <div class="row justify-content-center">
                    <div class="col-7">
                        <div class="text-center" style={style.box}>
                            <h1>{this.props.date}</h1>
                        </div>
                    </div>
                </div>
                <div class="row">
                    {this.state.menu.map(function (menu, menuIndex) {
                        return (
                            <div class="col-md-5 col-xs-12" style={style.box}>
                                <div class="text-center">
                                    <h2>{menu.menu.restaurant}</h2>
                                    <hr />
                                    {Object.keys(menu.menu.food).map(function (price, priceIndex) {
                                        return (
                                            <div>
                                                <h5><b>{price}:</b></h5>
                                                {menu.menu.food[price].map(function (food, foodIndex) {
                                                    return (
                                                        <div style={{marginBottom: "2%"}}>
                                                            <Info text={food.name} info={food.info} meta={food.meta} index={foodIndex} />
                                                        </div>
                                                    );
                                                })}
                                                <br />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

module.exports = Menu;