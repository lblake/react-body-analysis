const ColumnInputs = (props) => {
  console.log(props);
  return (
    <div>
      <input
        type='text'
        onChange={props.handleInputProp}
        value={props.dateProp}
      />
    </div>
  );
};

export default ColumnInputs;
