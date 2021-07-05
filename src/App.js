import { useState } from 'react';
import './App.css';
import ColumnHeaders from './components/ColumnHeaders';
import ColumnInputs from './components/ColumnInputs';

function App() {
  const [inputState, setInputState] = useState([
    [
      {
        name: 'Date',
        value: '2018-07-22',
      },
      {
        name: 'Total Body Weight',
        value: '',
      },
      {
        name: 'Fat %',
        value: '',
        minRange: '16',
        maxRange: '20',
      },
      {
        name: 'Fat Kg',
        value: '',
        minRange: '12',
        maxRange: '15',
      },
      {
        name: 'Lean Weight',
        value: '',
        minRange: '62',
        maxRange: '65',
      },
      {
        name: 'Water %',
        value: '',
        minRange: '55',
        maxRange: '65',
      },
      {
        name: 'Total Body Water Ltr',
        value: '',
        minRange: '42',
        maxRange: '49',
      },
      {
        name: 'Dry Lean Kg',
        value: '',
      },
      {
        name: 'BMR Kcal',
        value: '',
      },
      {
        name: 'Energy Kcal',
        value: '',
      },
      {
        name: 'Waist cm',
        value: '',
      },
      {
        name: 'Hips cm',
        value: '',
      },
    ],
    [],
  ]);

  const handleInput = (event) => {
    // console.log(event.target.name);
    event.preventDefault();
    setInputState({ value: event.target.value });
  };
  return (
    <div>
      <h1>BODY ANALYSIS</h1>
      <ColumnHeaders
        dateText={'Date'}
        totalBodyText={'Total Body Weight'}
        fatPercentageText={'Fat %'}
        fatKiloGramText={'Fat Kg'}
        leanWeightText={'Lean Weight'}
        waterPercentageText={'Water %'}
        totalBodyWaterText={'Total Body Water Ltr'}
        dryLeanWeightText={'Dry Lean Kg'}
        bmrKCalText={'BMR Kcal'}
        energyKCalText={'Energy Kcal'}
        waistCMText={'Waist cm'}
        hipsCMText={'Hips cm'}
      />

      <ColumnInputs
        handleInputProp={handleInput}
        dateProp={inputState[0][0].value}
        totalBodyWeightProp={inputState[0][1].value}
        fatPercentageProp={inputState[0][2].value}
        fatKiloGramProp={inputState[0][3].value}
        leanWeightProp={inputState[0][4].value}
        waterPercentageProp={inputState[0][5].value}
        totalBodyWaterProp={inputState[0][6].value}
        dryLeanWeightProp={inputState[0][7].value}
        bmrKCalProp={inputState[0][8].value}
        energyKCalProp={inputState[0][9].value}
        waistCMProp={inputState[0][10].value}
        hipsCMProp={inputState[0][11].value}
      />
      <ColumnInputs />
      <ColumnInputs />
      <ColumnInputs />
      <ColumnInputs />
      <ColumnInputs />
      <ColumnInputs />
      <ColumnInputs />
      <ColumnInputs />
      <ColumnInputs />
      <ColumnInputs />
      <ColumnInputs />
    </div>
  );
}

export default App;
