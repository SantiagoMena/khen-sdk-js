module.exports = async ( options ) => {
    const { url } = options;
    response = {
        error: false,
        mensaje: "Recibido"
    }

    window.location.href = url;
    
    return response;
}