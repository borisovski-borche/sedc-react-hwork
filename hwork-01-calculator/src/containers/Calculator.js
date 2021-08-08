import React from "react";
import NumberInput from "../components/NumberInput";
import OperationsDropdown from "../components/OperationsDropdown";
import classes from "./Calculator.module.css";

const OPERATIONS = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    return !a || !b ? "" : a / b;
  },
};

//USING ClASS

class Calculator extends React.Component {
  state = {
    numOne: "",
    numTwo: "",
    operator: "add",
    result: "",
  };

  updateElements(inputId, value) {
    return this.setState({
      [inputId]: value,
    });
  }

  componentDidUpdate(_, prevState) {
    const stateKeys = Object.keys(this.state);
    stateKeys.forEach(key => {
      if (this.state[key] !== prevState[key]) {
        const result = OPERATIONS[this.state.operator](
          +this.state.numOne,
          +this.state.numTwo
        );
        this.setState({
          result: result,
        });
      }
    });
  }

  render() {
    return (
      <div className={classes.Calculator}>
        <NumberInput
          inputId={"numOne"}
          value={this.state.numOne}
          onChange={this.updateElements.bind(this)}
        />
        <OperationsDropdown
          inputId={"operator"}
          value={this.state.operator}
          onChange={this.updateElements.bind(this)}
        />
        <NumberInput
          inputId={"numTwo"}
          value={this.state.numTwo}
          onChange={this.updateElements.bind(this)}
        />
        <div className={classes.equals}>=</div>
        <div className={classes.result}>{this.state.result}</div>
      </div>
    );
  }
}

//USING HOOKS

// const Calculator = props => {
//   const [numOne, setNumOne] = useState("");
//   const [numTwo, setNumTwo] = useState("");
//   const [operator, setOperator] = useState("add");
//   const [result, setResult] = useState("");

//   useEffect(() => {
//     const result = OPERATIONS[operator](+numOne, +numTwo);
//     setResult(result);
//   }, [numOne, numTwo, operator]);

//   return (
//     <div className={classes.Calculator}>
//       <NumberInput value={numOne} onChange={setNumOne} />
//       <OperationsDropdown value={operator} onChange={setOperator} />
//       <NumberInput value={numTwo} onChange={setNumTwo} />
//       <div className={classes.equals}>=</div>
//       <div className={classes.result}>{result}</div>
//     </div>
//   );
// };

export default Calculator;
