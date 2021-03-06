var React = require("react");
var style = require("./style");
var Info = require("./food-info");

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            food: {}
        }
        this.getMenu = this.getMenu.bind(this);
    }

    componentDidMount() {
        this.getMenu();
    }

    getMenu() {
        $.ajax({
            method: "get",
            url: this.props.restaurant,
            success: function (res) {
                var menu = {};
                for (var a = 0; a < res.data.length; a++) {
                    for (var b = 0; b < res.data[a].data.length; b++) {
                        var date = res.data[a].date;
                        if (!(date in menu)) {
                            menu[date] = {};
                        }
                        var price = res.data[a].data[b].price.name;
                        if (!(price in menu[date])) {
                            menu[date][price] = [];
                        }
                        var nutrition = res.data[a].data[b].nutrition
                        var meta = res.data[a].data[b].meta[0].join(", ") + " --- " + res.data[a].data[b].meta[1].join(", ");
                        menu[date][price].push({ name: res.data[a].data[b].name, info: nutrition, meta: meta});
                    }
                }
                this.setState({
                    food: menu
                });
            }.bind(this)
        });
    }

    render() {
        var food = this.state.food;
        return (
            <div class="row justify-content-center" key={this.props.key} style={{ marginTop: "70px" }}>
                {Object.keys(food).map(function (date, dateIndex) {
                    return (
                        <div class="col-md-8 col-xs-10" style={style.box}>
                            <h3>{ date }</h3>
                            <hr />
                            {Object.keys(food[date]).map(function (price, priceIndex) {
                                return (
                                    <div>
                                        <b>{price}:</b>
                                        {food[date][price].map(function (food, foodIndex) {
                                            return (
                                                <div style={{ marginBottom: "2%" }}>
                                                    <Info text={food.name} info={food.info} meta={food.meta} index={foodIndex} />
                                                </div>
                                            );
                                        })}
                                        <br />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}

module.exports = Menu;