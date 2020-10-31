import React from "react";
import './App.css';
import Chat from "./Chat";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="app">
    
    {/* {sideBar component} */}
    <SideBar /> 
    {/* {chat Comonent} */}
    <Chat />
    </div>
  );
}

export default App;
