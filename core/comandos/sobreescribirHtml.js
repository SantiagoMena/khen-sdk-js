module.exports = (options) => {
    const newHtml = options.html;
    const html = document.getElementsByTagName('html')[0];
    html.innerHTML = newHtml;

    return {
        error: false,
        mensaje: "Etiqueta HTML modificada"
    };
}