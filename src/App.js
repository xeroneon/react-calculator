import React, { useState } from 'react';
import './App.css';
import Result from './components/Result'
import Button from "./components/Button"

function App() {
  const [result, setResult] = useState('');
  const numbers = ["1", "2", "3", '/', "Del", "4", "5", "6", '*', "C", "7", "8", "9", '-', '', "0", '.', '=', '+'];

  const handleButton = e => {
    console.log(e.target.number)
    if (e.target.textContent === '=') {
      return setResult(eval(result));
    }
    if (e.target.textContent === 'C') {
      return setResult('')
    }
    if (e.target.textContent === "Del") {
      return setResult(result.slice(0, -1));
    }
    setResult(result + e.target.textContent)
  }

  const handleClear = () => {
    setResult('');
  }

  document.onkeyup = (e) => {
    console.log(e.key);
    if (e.key === "Backspace") {
      return setResult(result.slice(0, -1));
    }
    if (e.key === "Enter") {
      return setResult(eval(result));
    }
    if (numbers.indexOf(e.key) === -1) {
      return;
    }
    setResult(result + e.key);
  }

  // const evaluate = () => {
  //   setResult(eval(result));
  // }


  return (
    <>
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
    </>
  );
}

export default App;
