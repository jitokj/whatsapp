import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import Chat from "./Chat";
import SideBar from "./SideBar";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {

  const [messages,setMessages] = useState([]);

  useEffect(()=>{
    axios.get("/messages/sync")
    .then(response=>{
     
      setMessages(response.data);
    })
    .catch(err=>console.log(err));
  },[])

  useEffect(()=>{
    var pusher = new Pusher('958aadfaf52da2758d3f', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
    });
  },[])


  console.log(messages);
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
