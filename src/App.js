import React from "react";
import { useEffect } from "react";
import './App.css';
import Chat from "./Chat";
import SideBar from "./SideBar";
import Pusher from "pusher-js";

function App() {
  useEffect(()=>{
    var pusher = new Pusher('958aadfaf52da2758d3f', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
    });
  },[])
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
