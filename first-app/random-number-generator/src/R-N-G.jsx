import "./App.css";
import { useState } from "react";

function RandomNumberGenerator() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState(""); // Add error state

  const handleGenerate = () => {
    if (!min || !max) {
      // checks If either min or max is falsy (empty, undefined, null, or 0)
      setError("Minimum and Maximum numbers cannot be empty");
      return;
    }
    if (parseInt(min) <= 0 || parseInt(max) <= 0) {
      setError("Minimum and Maximum numbers cannot be zero or negative");
      return;
    }
    if (parseInt(min) > parseInt(max)) {
      setError("Minimum number cannot be greater than Maximum number");
      return;
    }
    setError(""); // Clear previous error
    const randNum =
      Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
    setRandomNumber(randNum);
    setShowResult(true);
  };

  return (
    <div className="App">
      {showResult && (
        <div className="overlay">
          <div className="resultBox">
            <p>
              Your random number <br /> between {min} and {max} is: <hr />
              <div className="resultNumber">{randomNumber}</div> <hr />
            </p>
            <div className="buttonGroup">
            <button onClick={handleGenerate}>Again</button>  {/* The "Again" button */}
            <button className="closeButton" onClick={() => setShowResult(false)}>Close</button>
            </div>
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
      {error && ( // Conditionally render error box
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            border: "1px solid black",
            color: "red",
            display: "flex",
            alignItems: "center",
          }}
        >
          <i
            className="bx bxs-message-error"
            style={{ marginRight: "10px" }}
          ></i>{" "}
          {/* Add your icon here */}
          {error}
        </div>
      )}
    </div>
  );
}

export default RandomNumberGenerator;
