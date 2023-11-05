import React from 'react'
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Input from "./Input"
import Messages from './Messages';


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>vishal</span>
        <div className="chatIcons">
            <img src={Cam} alt="" />
            <img src={Add} alt="" />
            <img src={More} alt="" />
        </div>
       
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat