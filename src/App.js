import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import GetCategories from './components/GetCategories';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      {/* <h2>Click on the card to reveal the answer.</h2> */}
      {/* <Card frontSide="9 * 6" backSide="54"/>
      <Card frontSide="2 ** 8" backSide="256"/>
      <Card frontSide="rabbit * 8" backSide="rabbyte"/> */}
      <GetCategories/>
      <Footer />
    </div>
  );
}

export default App;
