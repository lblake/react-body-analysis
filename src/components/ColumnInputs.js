const ColumnInputs = (props) => {
  console.log(props);
  return (
    <div>
      <input type='text' value={props.value} />
    </div>
  );
};

export default ColumnInputs;
