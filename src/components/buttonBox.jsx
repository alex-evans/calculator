import React from "react";
import { connect } from "react-redux";
import CalcButton from "./calcButton";

class ButtonBox extends React.Component {
    render() {
        return (
            <div id="button-box">
                <CalcButton buttonId="all-clear" sign="AC" />
                <CalcButton buttonId="divide" sign="/" />
                <CalcButton buttonId="mult" sign="x" />
                <CalcButton buttonId="seven" sign="7" />
                <CalcButton buttonId="eight" sign="8" />
                <CalcButton buttonId="nine" sign="9" />
                <CalcButton buttonId="subtract" sign="-" />
                <CalcButton buttonId="four" sign="4" />
                <CalcButton buttonId="five" sign="5" />
                <CalcButton buttonId="six" sign="6" />
                <CalcButton buttonId="plus" sign="+" />
                <CalcButton buttonId="one" sign="1" />
                <CalcButton buttonId="two" sign="2" />
                <CalcButton buttonId="three" sign="3" />
                <CalcButton buttonId="equal" sign="=" />
                <CalcButton buttonId="zero" sign="0" />
                <CalcButton buttonId="decimal" sign="." />
            </div>
        )
    }
}

export default ButtonBox;