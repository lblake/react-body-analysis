import { useState } from 'react';
import './App.css';
import ColumnHeaders from './components/ColumnHeaders';
import ColumnInputs from './components/ColumnInputs';

function App() {
  const [inputState, setInputState] = useState([
    [
      {
        name: 'date',
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
        valid: '',
      },
      {
        name: 'Fat Kg',
        value: '',
        minRange: '12',
        maxRange: '15',
        valid: '',
      },
      {
        name: 'Lean Weight',
        value: '',
        minRange: '62',
        maxRange: '65',
        valid: '',
      },
      {
        name: 'Water %',
        value: '',
        minRange: '55',
        maxRange: '65',
        valid: '',
      },
      {
        name: 'Total Body Water Ltr',
        value: '',
        minRange: '42',
        maxRange: '49',
        valid: '',
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
  ]);

  const handleInput = (event) => {
    const targetNameSplit = event.target.name.split('-');
    const targetPropIndex = targetNameSplit[1];
    const targetStateIndex = targetNameSplit[2];

    const oldState = [...inputState];

    oldState[targetStateIndex][targetPropIndex].value = event.target.value;

    if (oldState[targetStateIndex][targetPropIndex].value === '') {
      oldState[targetStateIndex][targetPropIndex].valid = '';
    } else if (oldState[targetStateIndex][targetPropIndex].rangeMax) {
      if (
        oldState[targetStateIndex][targetPropIndex].rangeMin <
          oldState[targetStateIndex][targetPropIndex].value &&
        oldState[targetStateIndex][targetPropIndex].value <
          oldState[targetStateIndex][targetPropIndex].rangeMax
      ) {
        oldState[targetStateIndex][targetPropIndex].valid = 'yes';
      } else {
        oldState[targetStateIndex][targetPropIndex].valid = 'no';
      }
    }

    setInputState(oldState);

    // event.preventDefault();
    // setInputState({ value: event.target.value });
  };

  const myInputs = [];
  for (let i = 0; i < 11; i++) {
    myInputs.push(
      <table>
        <ColumnInputs
          dateProp={inputState[i][0].value}
          totalBodyWeightProp={inputState[i][1].value}
          fatPercentageProp={inputState[i][2].value}
          fatKiloGramProp={inputState[i][3].value}
          leanWeightProp={inputState[i][4].value}
          waterPercentageProp={inputState[i][5].value}
          totalBodyWaterProp={inputState[i][6].value}
          dryLeanWeightProp={inputState[i][7].value}
          bmrKCalProp={inputState[i][8].value}
          energyKCalProp={inputState[i][9].value}
          waistCMProp={inputState[i][10].value}
          hipsCMProp={inputState[i][11].value}
          handleInputProp={handleInput}
          indexProp={i}
        />
      </table>
    );
  }

  return (
    <div>
      <h1>BODY ANALYSIS</h1>
      <table>
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
      </table>

      {myInputs}
    </div>
  );
}

export default App;
