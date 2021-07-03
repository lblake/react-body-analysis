import { useState } from 'react';
import './App.css';
import ColumnHeaders from './components/ColumnHeaders';
import ColumnInputs from './components/ColumnInputs';

function App() {
  const [inputState, setInputState] = useState([
    [
      {
        name: 'Date',
        value: '',
      },
      {
        name: 'Total Body Weight',
        value:'',
      },
      {
        name:'Fat %',
        value: '',
        rangeMin: 16,
        rangeMax: 20
      }
    ],
    [],
  ]);

  const handleInput =  () => {

  }
  return (
    <div>
      <ColumnHeaders />
      <ColumnInputs date={inputState[0][0].value} totalBodyWeight={inputState[0][1].value}/>
      <ColumnInputs />
    </div>
  );
}

export default App;
