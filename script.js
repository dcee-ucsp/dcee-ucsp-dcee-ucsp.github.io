function seleccionarLinea(linea) {
    document.querySelectorAll('.mensaje-linea').forEach(msg => msg.classList.add('oculto'));
    document.querySelectorAll('.curso').forEach(curso => {
        curso.classList.remove('seleccionado');
    });

    const cursosSeleccionados = document.querySelectorAll(`.${linea}`);
    cursosSeleccionados.forEach(curso => {
        curso.classList.add('seleccionado');
        const mensaje = curso.nextElementSibling;
        if (mensaje && mensaje.classList.contains('mensaje-linea')) {
            mensaje.classList.remove('oculto');
        }
    });
}
