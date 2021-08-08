import classes from "./NumberInput.module.css";

const NumberInput = props => {
  return (
    <input
      className={classes.NumberInput}
      type="number"
      value={props.value}
      onChange={e => props.onChange(props.inputId, e.target.value)}
    />
  );
};

export default NumberInput;
