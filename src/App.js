import logo from './logo.svg';
import btcbg from './btcbg.svg';
import btc from './btc.png';
import g from './g.gif';
import './App.css';
// import Button from './components/Button';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import Footer from './components/Footer';
function App() {
  const [getvalue, setvalue] = useState(btc)

  const changebutton = () => {
    setvalue(g)
  }

  const NavHeading = "JUDUL NAVBAR"
  const NavKontak = "CONTACT"
  const NavAbout = "ABOUT"
  const footer = () => {
    return <i> Ini adalah footer Italic style</i>
  }
  return (

    <div className="App">
      <header className="App-header">
        <Navbar Navheading={NavHeading} Navkontak={NavKontak} Navabout={NavAbout} />
        <div>
          {getvalue && <img src={getvalue} className="App-logo" alt="logo" />}
        </div>

        <button onClick={() => changebutton()}>CHANGE</button>
        {/* <Button /> */}
        <Footer kaki={footer} />
      </header>
    </div>
  );
}

export default App;


