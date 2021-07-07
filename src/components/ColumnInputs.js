const columnInputs = (props) => {
  console.log(props);
  return (
    <div>
      <tr>
      <td>
      <input
        type='date'
        id='start'
        name={`date-0-${props.indexProp}`}
        value={props.dateProp}
        min='2021-01-01'
        max={Date.now()}
        onChange={props.handleInputProp}
      />
      </td>
      </tr>
      <tr>
        <td>
          <input type="text" />
          
        </td>
      </tr>
    </div>
  );
};

export default columnInputs;
