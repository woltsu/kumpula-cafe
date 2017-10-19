var React = require("react");
var style = require("./style");

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        var expandedId = "expanded-" + this.props.index;
        var expandedHeight = document.getElementById(expandedId).clientHeight;
        this.setState({
            height: 0,
            expandedHeight: expandedHeight
        });
    }

    handleClick() {
        var newOpened = !this.state.opened;
        let value;
        newOpened ? value = this.state.expandedHeight : value = -1 * this.state.expandedHeight;
        var newHeight = this.state.height + value;
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
            overflow: "hidden",
            cursor: "pointer"
        }
        var transform = "none";
        if (this.state.opened) {
            transform = "rotate(90deg)";
        }
        var rotationStyle = {
            WebkitTransform: transform,
            transition: "all 0.5s",
            display: "inline-block"
        }
        var nameId = "name-" + this.props.index;
        var infoId = "info-" + this.props.index;
        var hiddenTextid = "expanded-" + this.props.index;
        return (
            <div>
                <div onClick={this.handleClick}>
                    <p style={{cursor: "pointer"}} id={nameId}><a style={rotationStyle}>></a> {this.props.text}</p>
                    <div id={hiddenTextid} style={divStyle}>
                        <p id={infoId} style={{ color: "#696969" }}>
                            {this.props.info}
                            <br />
                            {this.props.meta}
                        </p>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Info;