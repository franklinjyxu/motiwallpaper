import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


let bg = ["http://bit.ly/2RoB8ob","http://bit.ly/2YczGXm","http://bit.ly/35YluUp"]

function App() {
  return (
    <div className="App">
      <Changebg/> 
    </div>
  );
}

function Changebg(props) {
  const [activate, setActivate] = useState("");

  function handleClick (blue) {
    setActivate (blue.target.id);
  }
 

  return (
    <div className={"initialpage" + (activate == "" ? "activated" : "")}>
      <div className="bluebanner">
      <button id="Areyou">Are you feeling a bit blue today?</button>
      <button id="yes" onClick={handleClick}>Yes</button>
      <button id="no" onClick={handleClick}>No</button>
      <p className="background"></p>
      </div>
      <div className="originalbg">
        <header><img className="googlelogo" src={bg[1]} width="250px"></img></header>
        <p><img className="searchbar" src={bg[2]} width="450px"></img></p>
      </div>
      <div className="motibox">
        <button id="quote"><span>You limitation—it's only your imagination.</span></button>

      </div>
    </div>

  );
}


export default App;
