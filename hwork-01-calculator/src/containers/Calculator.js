import { useState, useEffect } from "react";
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

const Calculator = props => {
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [operator, setOperator] = useState("add");
  const [result, setResult] = useState("");

  useEffect(() => {
    const result = OPERATIONS[operator](+numOne, +numTwo);
    setResult(result);
  }, [numOne, numTwo, operator]);

  return (
    <div className={classes.Calculator}>
      <NumberInput value={numOne} onChange={setNumOne} />
      <OperationsDropdown value={operator} onChange={setOperator} />
      <NumberInput value={numTwo} onChange={setNumTwo} />
      <div className={classes.equals}>=</div>
      <div className={classes.result}>{result}</div>
    </div>
  );
};

export default Calculator;
