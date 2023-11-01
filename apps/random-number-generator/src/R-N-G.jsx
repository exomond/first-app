import "./App.css";
import { useState } from "react";

function RandomNumberGenerator() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState(""); // Add error state
  const [showProgress, setShowProgress] = useState(false);
  const [showAgainButton, setShowAgainButton] = useState(false);

  const handleGenerate = () => {
    if (!min || !max || min == max) {
      // checks If either min or max is falsy (empty, undefined, null, or 0)
      setError("Minimum and Maximum numbers cannot be empty or equal");
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
    setShowResult(true); // Show the resultBox with the progress bar immediately
    setShowProgress(true); // Start showing the progress bar
    setShowAgainButton(false); // Hide the "Again" button initially

    // After 3 seconds delay:
    setTimeout(() => {
      const randNum =
        Math.floor(Math.random() * (Number(max) - Number(min) + 1)) +
        Number(min);
      setRandomNumber(randNum);
      setShowProgress(false); // Hide the progress bar after the timeout
      setShowAgainButton(true); // Show the "Again" button after result is presented
    }, 1500); // This is a 3-second delay
  };

  return (
    <div className="App">
      {showResult && (
        <div className="overlay">
          <div className="resultBox">
            {showProgress ? (
              <div className="progressBar"></div>
            ) : (
              <p>
                Your random number <br /> between {min} and {max} is: <hr />
                <div className="resultNumber">{randomNumber}</div> <hr />
              </p>
            )}
            <div className="buttonGroup">
              {showAgainButton && (
                <button onClick={handleGenerate}>Again</button>
              )}
              <button
                id="centeredCloseButton"
                className="closeButton"
                onClick={() => {
                  setShowResult(false);
                  setShowProgress(false);
                }}
              >
                Close
              </button>
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
      {error && (
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
          ></i>
          {error}
        </div>
      )}
    </div>
  );
}

export default RandomNumberGenerator;
