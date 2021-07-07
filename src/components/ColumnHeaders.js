import React from 'react';

const columnHeaders = (props) => {
  return (
    <div>
      <tr>
        <td>{props.dateText} </td>
      </tr>

      <tr>
        <td>{props.totalBodyText}</td>
      </tr>

      <tr>
        <td>{props.fatPercentageText}</td>
      </tr>

      <tr>
        <td>{props.fatKiloGramText}</td>
      </tr>

      <tr>
        <td>{props.leanWeightText}</td>
      </tr>

      <tr>
        <td>{props.waterPercentageText}</td>
      </tr>

      <tr>
        <td>{props.totalBodyWaterText}</td>
      </tr>

      <tr>
        <td>{props.dryLeanWeightText}</td>
      </tr>

      <tr>
        <td>{props.bmrKCalText}</td>
      </tr>

      <tr>
        <td>{props.energyKCalText}</td>
      </tr>

      <tr>
        <td>{props.waistCMText}</td>
      </tr>

      <tr>
        <td>{props.hipsCMText}</td>
      </tr>
    </div>
  );
};

export default columnHeaders;
