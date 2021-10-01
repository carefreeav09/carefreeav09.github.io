import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Title className="mb-3">Hello i am title</Title>

        <Card>I am a card boi</Card>
      </header>
    </div>
  );
}

export default App;
