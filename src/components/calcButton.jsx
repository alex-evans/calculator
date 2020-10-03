import React from "react";
import { connect } from "react-redux";
import { addPressed } from "../redux/actions";

class CalcButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(event) {
        this.props.addPressed(event.target.value)
    }

    render() {
        return (
            <div className="calc-button" id={this.props.buttonId}>
                <button onClick={this.handleButtonClick} value={this.props.symbol}>{this.props.symbol}</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { addPressed })(CalcButton)