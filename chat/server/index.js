const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const {adduser,removeuser,getuser,getusersinroom} = require ('./users.js');
const PORT = process.env.PORT || 5000;
const router = require('./router');
const app = express();
const server = http.createServer(app);
corsOptions={
    cors: true,
    origins:["http://localhost:3000"],
}
const io = socketio(server, corsOptions);
app.use(router);
app.use(cors());

io.on('connection', (socket) => {
    socket.on('join', ({name,room}, callback) => {
        const {error, user} = adduser({id:socket.id, name, room});
        if (error) return callback(error); 
        
        socket.join(user.room);
        if (user.name !== "admin"){
        socket.emit('message',{user: 'admin', text: `${user.name}, welcome to room ${user.room}!`});
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined the room!`});
        };
        callback();
    }); 
    
    socket.on('sendmessage', (message, callback) => {
        const user = getuser(socket.id);
        io.to(user.room).emit('message', {user: user.name, text: message});
        callback();
    });

    socket.on('disconnect', () =>{
        const user = removeuser(socket.id);
        if (user){
            io.to(user.room).emit('message',{user:'admin', text: `${user.name} has left the room.`});
        }
    })
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
