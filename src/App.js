import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import GetCategories from './components/GetCategories';

function App() {
  return (
    <div className="App">
      <h1>Flash Cards</h1>
      {/* <h2>Click on the card to reveal the answer.</h2> */}
      {/* <Card frontSide="9 * 6" backSide="54"/>
      <Card frontSide="2 ** 8" backSide="256"/>
      <Card frontSide="rabbit * 8" backSide="rabbyte"/> */}
      <GetCategories/>
    </div>
  );
}

export default App;
