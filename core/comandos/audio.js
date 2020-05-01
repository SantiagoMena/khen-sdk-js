module.exports = async (options) => {
    const { url } = options;
    let mensaje = 'Audio reproducido';
    let error = false;
    
    try {
        await new Audio(url).play()
    } catch(e) {
        mensaje = e.message;
        error = true;
    }

    return {
        error,
        mensaje
    };
}