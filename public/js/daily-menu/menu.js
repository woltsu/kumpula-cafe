var React = require("react");

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            food: ""
        };
        this.getDailyMenu = this.getDailyMenu.bind(this);
    }

    getDailyMenu() {
        $.ajax({
            method: "get",
            url: "/api/menu/" + this.props.date,
            success: function (res) {
                alert("wökrs");
                this.setState({
                   food: res.food 
                });
            }.bind(this)
        });
    }

    componentDidMount() {
        this.getDailyMenu();
    }

    render() {
        return <h1>{this.state.food}</h1>;
    }
}

module.exports = Menu;