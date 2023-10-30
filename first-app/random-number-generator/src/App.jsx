import './App.css'
import { useState } from 'react';

function App() {
  // State to hold the input values and the random number
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [randomNum, setRandomNum] = useState(null);

  // Generate a random number between the given range
  const generateRandomNumber = () => {
    const randNum = Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
    setRandomNum(randNum);
  };

  return (
    <div className="App">
      <h1>Random Number Generator</h1>

      <div>
        <input
          type="number"
          placeholder="Min"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>

      <button onClick={generateRandomNumber}>Generate</button>

      {randomNum !== null && (
        <div>
          <h2>Generated Number:</h2>
          <p>{randomNum}</p>
        </div>
      )}
    </div>
  );
}

export default App;

