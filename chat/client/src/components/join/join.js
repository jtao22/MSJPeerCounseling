import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './join.css';

const Join = () => {
    const [name,setname] = useState('');
    const [room,setroom] = useState('');
    return(
        <div className = "joinOuterContainer">
            <div className = "joinInnerContainer">
                <h1 className = "heading"> MSJPC Live Chat</h1>
                <div><input placeholder="Anonymous Username" className = "joinInput" type = "text" onChange={(event) => setname(event.target.value)}/> </div>
                <div><input placeholder="Room Number" className = "joinInput mt-20" type = "text" onChange={(event) => setroom(event.target.value)}/> </div>
                <Link onClick = {event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className = "button mt-20" type="submit">Join</button>
                </Link>
            </div>
        </div>
    );
};

export default Join;
