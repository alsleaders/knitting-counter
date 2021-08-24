import React from "react";
import logo from "./logo.svg";
import { RowCounter } from "./features/counter/RowCounter";
import { RepeatCounter } from "./features/counter/RepeatCounter";
import "./App.css";

function App() {
  console.log("GNU Terry Pratchett");
  console.log(
    "It's not worth doing something unless you were doing something that someone, somewhere, would much rather you weren't doing."
  );
  return (
    <div className="App">
      <header className="App-header">
        <RepeatCounter />
        <img src={logo} className="App-logo" alt="logo" />
        <p className="textbox">Row Counter</p>
        <RowCounter />
      </header>
    </div>
  );
}

export default App;
