import React from 'react';
import "./SideBar.css";
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar,IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import logo from "./images/man.png";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SideBarChat from './SideBarChat';


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
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or Start new Chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SideBarChat />
            </div>
        </div>
    );
};

export default SideBar;