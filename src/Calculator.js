import React, { Component } from 'react';
import './Calculator.css';


class Calculator extends Component {
    render (){
        return (
        <div id="calculator">
            <div id="displayContainer">
                {/* <p className="input">{this.props.input}</p> */}
                <h4 className="operation">
                {this.props.preview === "" ? this.props.operation : this.props.preview}</h4>
                <h1 id="display" className="result">
                {this.props.result === "0" ?  "0" : this.props.result}
                </h1>
            </div>
            {/* result */}
            <button id="equals" 
            className="button" 
            value={"="} 
            onClick={this.props.handleResult}>=</button>
            {/* numbers and decimal */}
            <button id="zero" 
            className="button" value={"0"} onClick={this.props.getNumber} >0</button>
            <button id="one" className="button" value={"1"} onClick={this.props.getNumber} >1</button>
            <button id="two" className="button" value={"2"} onClick={this.props.getNumber} >2</button>
            <button id="three" className="button" value={"3"} onClick={this.props.getNumber} >3</button>
            <button id="four" className="button" value={"4"} onClick={this.props.getNumber} >4</button>
            <button id="five" className="button" value={"5"} onClick={this.props.getNumber} >5</button>
            <button id="six" className="button" value={"6"} onClick={this.props.getNumber} >6</button>
            <button id="seven" className="button" value={"7"} onClick={this.props.getNumber} >7</button>
            <button id="eight" className="button" value={"8"} onClick={this.props.getNumber} >8</button>
            <button id="nine" className="button" value={"9"} onClick={this.props.getNumber} >9</button>
            <button id="decimal" className="button" value={"."} onClick={this.props.getNumber} >.</button>
            {/* operators */}
            <button id="add" className="button" value={"+"} onClick={this.props.handleOperator}>+</button>
            <button id="subtract" className="button" value={"-"} onClick={this.props.handleOperator}>-</button>
            <button id="multiply" className="button" value={"*"} onClick={this.props.handleOperator}>x</button>
            <button id="divide" className="button" value={"/"} onClick={this.props.handleOperator}>/</button>
            {/* reset */}
            <button id="clear" 
            className="button" 
            onClick={this.props.handleClear}>AC</button>
        </div>
        )
    }
}

export default Calculator;