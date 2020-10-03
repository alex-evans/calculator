import React from "react";
import { connect } from "react-redux";

class CalcButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(event) {

    }

    render() {
        return (
            <div className="calc-button" id={this.props.buttonId}>
                <button onClick={this.handleButtonClick} value={this.props.sign}>{this.props.sign}</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(CalcButton)