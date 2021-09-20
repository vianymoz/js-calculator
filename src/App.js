import React, { Component } from 'react';
import Calculator from './Calculator'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: "",
      operation: "",
      preview: "",
      result: "0"
    };
    this.getNumber = this.getNumber.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleResult = this.handleResult.bind(this);
  }



  getNumber(e){
    if(e.target.value !== ".") {
      if(e.target.value === "0" && this.state.input !== "") {
        if (!this.state.input.startsWith("0") || this.state.input.startsWith("0.") ){
            this.setState({
              input: this.state.input + e.target.value,
              operation: this.state.operation.concat(e.target.value),
              preview: "",
              result: this.state.input + e.target.value
            });
        } else {
          this.setState({
            input: e.target.value,
            preview: "",
            operation: this.state.operation
          });
        }
        
      } else if(e.target.value === "0" && this.state.input === ""){
        this.setState({
          input: e.target.value,
          operation: this.state.operation,
          preview: "",
        });

      } else if (e.target.value !== "0" && this.state.operation === "0"){
        this.setState({
          input: e.target.value,
          operation: e.target.value,
          preview: "",
          result: this.state.input + e.target.value
        });

      } else if (e.target.value !== "0" && this.state.operation === "0."){
        this.setState({
          input: this.state.input + e.target.value,
          operation: this.state.operation.concat(e.target.value),
          preview: "",
          result: this.state.input + e.target.value
        });

      } else if (e.target.value !== "0"){
        this.setState({
          input: this.state.input + e.target.value,
          operation: this.state.operation.concat(e.target.value),
          preview: "",
          result: this.state.input + e.target.value
        });
      }

    } else if(e.target.value === "." && !this.state.input.includes(".")){
      if(this.state.input === ""){
        this.setState({
          input: "0" + e.target.value,
          operation: this.state.operation.concat( e.target.value),
          preview: "",
          result: "0" + e.target.value
        });
      } else {
        this.setState({
          input: this.state.input + e.target.value,
          operation: this.state.operation.concat( e.target.value),
          preview: "",
          result: this.state.input + e.target.value
        });
      }
      
    } 
  }

  handleOperator(e){
     if(e.target.value !== "-"){

       if(this.state.operation.endsWith("+")){
        this.setState({
          operation: this.state.operation.slice(0, -1) + e.target.value,
          input: "",
          result: e.target.value
        })
       } else if (this.state.operation.endsWith("--") || this.state.operation.endsWith("+-") || this.state.operation.endsWith("*-") || this.state.operation.endsWith("/-")){
        this.setState({
          operation: this.state.operation.slice(0, -2) + e.target.value,
          input: "",
          result: e.target.value
        })
       } else if (this.state.operation === "-"){
        this.setState({
          operation: "0",
          input: "",
          result: "0"
        })
       } else if (this.state.operation.endsWith("-")){
        this.setState({
          operation: this.state.operation.slice(0, -1) + e.target.value,
          input: "",
          result: e.target.value
        })
       } else if (this.state.operation.endsWith("*")){
        this.setState({
          operation: this.state.operation.slice(0, -1) + e.target.value,
          input: "",
          result: e.target.value
        })
       } else if (this.state.operation.endsWith("/")){
        this.setState({
          operation: this.state.operation.slice(0, -1) + e.target.value,
          input: "",
          result: e.target.value
        })

       } else if (this.state.operation === "0"){
        this.setState({
          operation: "0"
        })

       } else {
        this.setState({
          operation: this.state.operation + e.target.value,
          input: "",
          result: e.target.value
        })
       }
      
     } else {
       if(this.state.operation === "0"){
        this.setState({
          operation: e.target.value,
          input: e.target.value,
          result: e.target.value
        })
       } else if (this.state.operation === "-"){
        this.setState({
          operation: e.target.value,
          input: e.target.value,
          result: e.target.value
        })
       } else if (this.state.operation.endsWith("+-")){
        this.setState({
          operation: this.state.operation,
          input: "",
          result: e.target.value
        })
       } else if (this.state.operation.endsWith("--")){
        this.setState({
          operation: this.state.operation,
          input: "",
          result: e.target.value
        })
       } else if (this.state.operation.endsWith("*-")){
        this.setState({
          operation: this.state.operation,
          input: "",
          result: e.target.value
        })
       } else if (this.state.operation.endsWith("/-")){
        this.setState({
          operation: this.state.operation,
          input: "",
          result: e.target.value
        })
       } else {
        this.setState({
          operation: this.state.operation + e.target.value,
          input: "",
          result: e.target.value
        })
       }
     }

  }

  handleResult(e){
    let getResult = eval(this.state.operation); 

    if (getResult.length > 18){
      Math.floor(getResult);
    }   
    console.log(getResult);

    this.setState({
      result: getResult,
      preview: this.state.operation + "=",
      operation: getResult.toString(),
      input: ""
    })
  }

  
  handleClear(e){
    this.setState({
      input: "",
      operation: "0",
      preview: "",
      result: "0"
    });
  }
    

  render (){
    return (
      <div className="App">
        <Calculator getNumber={this.getNumber}
        handleOperator={this.handleOperator}
        handleResult={this.handleResult}
        handleClear={this.handleClear} 
        input={this.state.input} 
        operation={this.state.operation} 
        preview={this.state.preview} 
        result={this.state.result}
         />
      </div>
      
    );
  
  }
  
}
 
export default App;
