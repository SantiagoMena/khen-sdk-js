import io from 'socket.io-client';
 
const socket = io('http://localhost:3000');

socket.on('comando', function( data ) {
    console.log(data);
    socket.emit('recibido', {ok: 'Todo fine'});
});