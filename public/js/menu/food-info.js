var React = require("react");

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        var nameId = "name-" + this.props.index;
        var infoId = "info-" + this.props.index;
        var divHeight = document.getElementById(this.props.index).clientHeight;
        var height = document.getElementById(nameId).clientHeight;
        var expandedHeight = document.getElementById(infoId).clientHeight;
        if (expandedHeight != 0) {
            expandedHeight = expandedHeight + height;
        }
        this.setState({
            height: height,
            expandedHeight: expandedHeight
        });
    }

    handleClick() {
        var newOpened = !this.state.opened;
        let value;
        newOpened ? value = this.state.expandedHeight : value = -1 * this.state.expandedHeight;
        var newHeight = (parseInt(this.state.height) + value);
        this.setState({
            opened: newOpened,
            height: newHeight
        });
    }

    render() {
        var height = this.state.height + "px";
        var divStyle = {
            height: height,
            transition: "height 1s",
            overflow: "hidden"
        }
        var transform = "none";
        if (this.state.opened) {
            transform = "rotate(90deg)";
        }
        var rotationStyle = {
            WebkitTransform: transform,
            transition: "all 1s",
            transitionTimingFunction: "linear",
            display: "inline-block"
        }
        var nameId = "name-" + this.props.index;
        var infoId = "info-" + this.props.index;
        var testId = "test-" + this.props.index;
        return (
            <div>
                <div id={this.props.index} onClick={this.handleClick} style={divStyle}>
                    <p id={nameId}><a style={rotationStyle}>></a> {this.props.text}</p>
                    <p id={infoId}>{this.props.info}</p>
                </div>
            </div>
        );
    }
}

module.exports = Info;