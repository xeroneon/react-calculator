import React, { useState } from 'react';
import './App.scss';
import Result from './components/Result'
import Button from "./components/Button"

function App() {
  const [result, setResult] = useState('');
  const numbers = ["1", "2", "3", '/', "Del", "4", "5", "6", '*', "C", "7", "8", "9", '-', '', "0", '.', '=', '+'];
  const numbersCheck = ["1", "2", "3", '/', "Del", "4", "5", "6", '*', "C", "7", "8", "9", '-', '', "0", '.', '=', '+', 'Del', 'Enter', 'Backspace'];

  const handleButton = e => {
    handleResult(e.target.textContent);
  }

  const handleClear = () => {
    setResult('');
  }

  document.onkeyup = (e) => {
    handleResult(e.key)
  }

  const handleResult = input => {

    if (numbersCheck.indexOf(input) === -1) {
      return;
    }

    switch (input) {
      case '=':
      case 'Enter':
        let number = eval(result);
        return setResult(number.toString());
        break;
      case 'C':
        return setResult('');
        break;
      case 'Del':
      case 'Backspace':
        return setResult(result.slice(0, -1));
      case '/':
      case '*':
      case '-':
      case '+':
      case '.':
        if (result.endsWith('/') || result.endsWith('*') || result.endsWith('-') || result.endsWith('+') || result.endsWith('.') ){
          return
        } else if(result === '') {
          return
        }
      default:
        setResult(result + input)
    }
  }

  // const evaluate = () => {
  //   setResult(eval(result));
  // }


  return (
    <>
    {/* <div class="sixteen-nine"> */}
      <div id="container">
        <Result text={result} handleClear={handleClear} />
        <div id="num-container">
          {numbers.map(number => {
            if (number === '') {
              return <div>&nbsp;</div>
            }
            return <Button number={number} key={number} handleButton={e => handleButton(e)} />
          })}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
