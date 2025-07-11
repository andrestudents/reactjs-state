import logo from './logo.svg';
import btcbg from './btcbg.svg';
import btc from './btc.png';
import g from './g.gif';
import './App.css';
// import Button from './components/Button';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
function App() {
  const [getvalue, setvalue] = useState("")

  const changebutton = () => {
    setvalue(btc)
  }
  return (

    <div className="App">
      <header className="App-header">
        <Navbar />
        <div>
          {/* <img src={btc} className="App-logo" alt="logo" /> */}
          <img src={g} className="App-logo" alt="logo" />
        </div>

        {getvalue && <img src={getvalue} className="App-logo" alt="logo" />}
        <button onClick={() => changebutton()}>Click Me Bro</button>
        {/* <Button /> */}
      </header>
    </div>
  );
}

export default App;
