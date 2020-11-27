import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './chat.css';
import InfoBar from '../infobar/infobar.js';
import Input from '../input/input.js';
import Messages from '../messages/messages.js';
let socket;

const Chat = ({location}) => {
    const [name,setname] = useState('');
    const [room,setroom] = useState('');
    const [messages,setmessages] = useState([]);
    const [message,setmessage] = useState('');
    const endpoint = 'https://msjpc-live-chat.herokuapp.com/';

    useEffect(() => {
        const {name,room} = queryString.parse(location.search);
        socket=io(endpoint);
        setname(name);
        setroom(room);
        socket.emit('join', {name, room}, () => {
            
        });
        return () => {
            socket.emit('disconnect');
            socket.off();
        };
    }, [endpoint, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setmessages([...messages, message]);
        });
    }, [messages]);

    const sendmessage = (event) => {
        event.preventDefault();
        if (message){
            socket.emit('sendmessage', message, () => setmessage(''));
        };
    };
    console.log(message,messages);

    return(
        <div className = "outerContainer">
            <div className = "container">
                <InfoBar room = {room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setmessage={setmessage} sendmessage={sendmessage}/>

            </div>
        </div>
    );
};

export default Chat;
