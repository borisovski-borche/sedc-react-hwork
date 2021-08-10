const Input = props => {
  const { value, onChange } = props;

  return (
    <input
      className="form-control align-self-center"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default Input;
