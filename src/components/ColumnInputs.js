import React from 'react';

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
          <input
            type='text'
            name={`totalBodyWeight-1-${props.indexProp}`}
            value={props.totalBodyWeight}
            onChange={props.handleInput}
          />
        </td>
      </tr>
      <tr>
        <td>
          <input
            type='text'
            name={`fatPercentage-2-${props.indexProp}`}
            value={props.fatPercentage}
            onChange={props.handleInput}
          />
        </td>
      </tr>
      <tr>
        <td>
          <input
            type='text'
            name={`fatKiloGram-3-${props.indexProp}`}
            value={props.fatKiloGram}
            onChange={props.handleInput}
          />
        </td>
      </tr>
      <tr>
        <td>
          <input
            type='text'
            name={`leanWeight-4-${props.indexProp}`}
            value={props.leanWeight}
            onChange={props.handleInput}
          />
        </td>
      </tr>
      <tr>
        <td>
          <input
            type='text'
            name={`waterPercentage-5-${props.indexProp}`}
            value={props.waterPercentage}
            onChange={props.handleInput}
          />
        </td>
      </tr>
      <tr>
        <td>
          <input
            type='text'
            name={`totalBodyWater-6-${props.indexProp}`}
            value={props.waterPercentage}
            onChange={props.handleInput}
          />
        </td>
      </tr>
      <tr>
        <td>
          <input
            type='text'
            name={`dryLeanWeight-7-${props.indexProp}`}
            value={props.dryLeanWeight}
            onChange={props.handleInput}
          />
        </td>
      </tr>
      <tr>
        <td>
          <input
            type='text'
            name={`bmrKCal-8-${props.indexProp}`}
            value={props.bmrKCal}
            onChange={props.handleInput}
          />
        </td>
      </tr>
      <tr>
        <td>
          <input
            type='text'
            name={`energyKCal-9-${props.indexProp}`}
            value={props.energyKCal}
            onChange={props.handleInput}
          />
        </td>
      </tr>
      <tr>
        <td>
          <input
            type='text'
            name={`waistCM-10-${props.indexProp}`}
            value={props.waistCM}
            onChange={props.handleInput}
          />
        </td>
      </tr>
      <tr>
        <td>
          <input
            type='text'
            name={`hipsCM-11-${props.indexProp}`}
            value={props.hipsCM}
            onChange={props.handleInput}
          />
        </td>
      </tr>
    </div>
  );
};

export default columnInputs;
