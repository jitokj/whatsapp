import React from "react";
import './App.css';
import Chat from "./Chat";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="app">
    <div className="app__body">
    
    {/* {sideBar component} */}
    <SideBar /> 
    {/* {chat Comonent} */}
    <Chat />
    </div>
    </div>
  );
}

export default App;
