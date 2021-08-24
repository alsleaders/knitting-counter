import React from "react";
import logo from "./logo.svg";
import { RowCounter } from "./features/counter/RowCounter";
import { RepeatCounter } from "./features/counter/RepeatCounter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RepeatCounter />
        <img src={logo} className="App-logo" alt="logo" />

        <RowCounter />
      </header>
    </div>
  );
}

export default App;
