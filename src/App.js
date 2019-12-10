import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


let bg = ["http://bit.ly/2YczGXm", "http://bit.ly/35YluUp","http://bit.ly/2OZaqkf"]
let stickers =["","https://media.giphy.com/media/y47oj4ptjPm5W/giphy.gif",'http://bit.ly/2PwFKFZ', "http://bit.ly/2YACpdd",
"http://bit.ly/2P7WsMR","http://bit.ly/2LGwQEH","http://bit.ly/2qHf3WS","http://bit.ly/2P7ZpNr","http://bit.ly/2RE4mze",
"http://bit.ly/2LDvnyU","http://bit.ly/2PtMtRe","http://bit.ly/2PrY1UW","http://bit.ly/3447kQ3"]

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
  const [className, setClassName] = useState("");
  const [state, setState] = useState(0);
  const classes = ["","initialpage","refresh","refresh1","refresh2","r3","r4","r5","r6","r7","r8","r9","r10"];
 

  function handleClick(blue) {
    setActivate(blue.target.id);
    setState((state+1)%13);
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

  function handleClick2() {
    setState((state+1)%13);
    setClassName("refresh");
  }

  function show_input(){
    document.getElementById('what').style.display = 'inline';
  }

  
  return (
    <>
    <div className={"base " + classes[state]}>
      <div className="bluebanner"> 
       <div className="headerflex">
        <h1 id="bluetoday">Are you feeling a bit blue today?</h1>
        <div className="twobuttons">
          <button id="yes" className="yesno" onClick={handleClick}>Yes</button>
          <button id="no" className="yesno" onClick={show_input}>No</button>
       </div>
       </div>
       <input type="text" placeholder="List one thing that motivates you most today." id="what"></input>
     </div>
  

    <div className="change">
    <img id="mark" src={(activate === "") ? "" : stickers[state]} height="80" alt=''></img>
    <img id="refresh" src={(activate === "") ? "" : bg[2]} height="60" alt="" onClick={handleClick2}></img>
    </div>
    <div className="originalbg">
      <header><img className="googlelogo" src={bg[0]} width="250px"></img></header>
      <p><img className="searchbar" src={bg[1]} width="450px"></img></p>
    </div>


    <div className="motibox">
      <button id="quote" className={(activate1 === "quote" ? "activated" : "")}
        onMouseMoveCapture={handleHover}><p>You Limitation ——— </p>
          <p>it's only your Imagination.</p></button>
      <button id="quote2" className={(activate2 === "quote2" ? "activated" : "")}
        onMouseMoveCapture={handleHover2}><p>Don’t Let Yesterday Take Up</p>
          <p>Too Much Of Today.</p></button>
      <button id="quote3" className={(activate3 === "quote3" ? "activated" : "")}
        onMouseMoveCapture={handleHover3}><p>If you Cannot do Great Things,</p>
          <p>do Small Things in a Great way.</p></button>
    </div>
    </div>
    </>
  );
}




export default App;
