var React = require("react");

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
                <h1>{this.props.date}</h1>
                {this.state.menu.map(function (menu, menuIndex) {
                    return (
                        <div>
                            <h1>{menu.menu.restaurant}</h1>
                            {Object.keys(menu.menu.food).map(function (price, priceIndex) {
                                return (
                                    <div>
                                        <b>{price}:</b>
                                        {menu.menu.food[price].map(function (food, foodIndex) {
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