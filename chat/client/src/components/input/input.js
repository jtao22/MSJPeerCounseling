import React from 'react';
import './input.css';

const Input = ({message, setmessage, sendmessage}) => (
    <form className = "form">
        <input
            className = "input"
            type = "text"
            placeholder = "Enter your message"
            value={message}
            onChange = {(event) => setmessage(event.target.value)}
            onKeyPress = {event => event.key === 'Enter' ? sendmessage(event) : null}
        />
        <button className = "sendButton" onClick = {(event) => sendmessage(event)}>Send</button>
    </form>
) 
export default Input;
