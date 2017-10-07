var React = require("react");

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
                        menu[date][price].push(res.data[a].data[b].name);
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
            <div>
                {Object.keys(food).map(function (date, dateIndex) {
                    return (
                        <div>
                            <hr />
                            <h3>{ date }</h3>
                            {Object.keys(food[date]).map(function (price, priceIndex) {
                                return (
                                    <div>
                                        <b>{price}:</b>
                                        {food[date][price].map(function (food, foodIndex) {
                                            return <p key={foodIndex}>- { food }</p>
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