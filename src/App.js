import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


let bg = ["http://bit.ly/2RoB8ob", "http://bit.ly/2YczGXm", "http://bit.ly/35YluUp", "https://media.giphy.com/media/y47oj4ptjPm5W/giphy.gif"]

function App() {
  return (
    <div className="App">
      <Changebg />
    </div>
  );
}

function Changebg(props) {
  const [activate, setActivate] = useState("");
  const [activate1, setActivate1] = useState("");
  const [activate2, setActivate2] = useState("");
  const [activate3, setActivate3] = useState("");

  function handleClick(blue) {
    setActivate(blue.target.id);
  }

  function handleHover(red) {
    setActivate1(red.target.id);
  }

  function handleHover2(orange) {
    setActivate2(orange.target.id);
  }

  function handleHover3(schwalz) {
    setActivate3(schwalz.target.id);
  }

  return (
    <>
    <div className={"initialpage" + (activate === "" ? "activated" : "")}>
      <div className="bluebanner">
        <h1>Are you feeling a bit blue today?</h1>
        <div className="twobuttons">
          <button id="yes" className="yesno" onClick={handleClick}>Yes</button>
          <button id="no" className="yesno">No</button>
       </div>
       </div>
  


    <img id="mark" src={(activate == "") ? "" : bg[3]} height="80" alt=''></img>
    <div className="originalbg">
      <header><img className="googlelogo" src={bg[1]} width="250px"></img></header>
      <p><img className="searchbar" src={bg[2]} width="450px"></img></p>
    </div>


    <div className="motibox">
      <button id="quote" className={(activate1 === "quote" ? "activated" : "")}
        onMouseMoveCapture={handleHover}><span><p>You Limitation ——— </p>
          <p>it's only your Imagination.</p></span></button>
      <button id="quote2" className={(activate2 === "quote2" ? "activated" : "")}
        onMouseMoveCapture={handleHover2}><span><p>Don’t Let Yesterday Take Up</p>
          <p>Too Much Of Today.</p></span></button>
      <button id="quote3" className={(activate3 === "quote3" ? "activated" : "")}
        onMouseMoveCapture={handleHover3}><span><p>If you Cannot do Great Things,</p>
          <p>do Small Things in a Great way.</p></span></button>
    </div>
    </div>
    </>
  );
}


export default App;
