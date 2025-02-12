
document.addEventListener('DOMContentLoaded', function() {
    const mensajeHora = document.getElementById('mensaje-hora');
    const horaActual = new Date().getHours();
    let mensaje;

    if (horaActual < 12) {
        mensaje = '¡Buenos días!';
    } else if (horaActual < 18) {
        mensaje = '¡Buenas tardes!';
    } else {
        mensaje = '¡Buenas noches!';
    }

    mensajeHora.textContent = mensaje;
});
