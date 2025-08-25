import React from "react";
import "./App.css";
import duck from './assets/download.jpeg';

function App() {
  function handleClick() {
    alert("Button clicked!");
  }
  return (
    <div className="container">
      
      <div className="App">
        <h1 className="title">Hello, React!</h1>
        <button id="button" onClick={handleClick}>
          Click Me
        </button>
      </div>
      
      <div className="pic">
        <img src={duck} className="logo react" alt="React logo" />
      </div>
      
      <div className="footer">
        <p>© 2024 My React App</p>
      </div>

    </div>
  );
}

export default App;
