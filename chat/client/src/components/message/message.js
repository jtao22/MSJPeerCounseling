import React from 'react';
import './message.css';
import ReactEmoji from 'react-emoji';

const Message = ({message: {user,text}, name}) => {
    let sentbycurruser = false;
    const trimname = name.trim().toLowerCase();
    if (user === trimname){
        sentbycurruser = true;
    };
    return(
        sentbycurruser ? (
            <div className = "messageContainer justifyEnd">
                <p className = "sentText pr-10">{trimname}</p>
                <div className = "messageBox backgroundBlue">
                    <p className = "messageText White">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        ) : (
            <div className = "messageContainer justifyStart">
                <div className = "messageBox backgroundLight">
                    <p className = "messageText Dark">{ReactEmoji.emojify(text)}</p>
                </div>
                <p className = "sentText pl-10">{user}</p>
            </div>
        )
    )
}
export default Message;
