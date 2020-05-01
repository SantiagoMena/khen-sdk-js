import io from 'socket.io-client';

const socket = io('http://localhost:3000');
const publicIp = require('public-ip');

socket.on('comando', async function( data ) {
    const { comando } = data;
    let response;

    switch (comando) {
        case 'publicIp':
            response = {
                error: false,
                data: {
                    ipv4: await publicIp.v4(),
                    ip6: await publicIp.v6()
                }
            }
            break;
    
        default:
            response = {
                error: true,
                mensaje: "Comando no encontrado"
            };
            break;
    }

    socket.emit('recibido', response);
});