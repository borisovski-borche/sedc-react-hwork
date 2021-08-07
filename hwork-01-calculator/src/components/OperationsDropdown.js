import classes from "./OperationsDropdown.module.css";

const OperationsDropdown = props => {
  return (
    <select
      className={classes.OperationsDropdown}
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
    >
      <option value="add">+</option>
      <option value="subtract">−</option>
      <option value="multiply">×</option>
      <option value="divide">÷</option>
    </select>
  );
};

export default OperationsDropdown;
