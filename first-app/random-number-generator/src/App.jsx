import './App.css'
import { useState } from 'react';


function App() {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleGenerate = () => {
    const randNum = Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
    setRandomNumber(randNum);
    setShowResult(true);
  };

  return (
    <div className="App">
      {showResult && (
        <div className="overlay">
          <div className="resultBox">
            <p>Your random number <br /> between {min} and {max} is: <hr /> {randomNumber} <hr /></p>
            <button onClick={() => setShowResult(false)}>Close</button>
          </div>
        </div>
      )}
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
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
}

export default App;
