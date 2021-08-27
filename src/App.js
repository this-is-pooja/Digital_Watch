import './App.css';
import Img from "./Image/Digital.jpg";
import {useState} from "react";
function App() {
  let time;
  const [ctime,setCtime]=useState(time);
  const UpdateTime=()=>{
    time=new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime,1000);
  return (
    <div>
      <img src={Img} width="100%"height="749.95rem" alt="Digital_Watch" />
        <div style={{ position: "absolute",top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
          <h1 style={{fontSize:"6rem",color:"white",letterSpacing:"0.2rem"}}>{ctime}</h1>
        </div>
    </div>
  );
}

export default App;
