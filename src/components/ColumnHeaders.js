const ColumnHeaders = (props) => {
  return (
    <div>
      <h3>{props.dateText} </h3>
      <h3>{props.totalBodyText}</h3>
      <h3>{props.fatPercentageText}</h3>
      <h3>{props.fatKiloGramText}</h3>
      <h3>{props.leanWeightText}</h3>
      <h3>{props.waterPercentageText}</h3>
      <h3>{props.totalBodyWaterText}</h3>
      <h3>{props.dryLeanWeightText}</h3>
      <h3>{props.bmrKCalText}</h3>
      <h3>{props.energyKCalText}</h3>
      <h3>{props.waistCMText}</h3>
      <h3>{props.hipsCMText}</h3>
    </div>
  );
};

export default ColumnHeaders;
