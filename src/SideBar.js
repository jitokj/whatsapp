import React from 'react';
import "./SideBar.css";
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar,IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import logo from "./images/man.png";


const SideBar = () => {
    return (
        <div className="sidebar">
            
            <div className="sidebar__header">
            <Avatar src={logo} />
           
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default SideBar;