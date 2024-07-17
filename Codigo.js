(() => {
    const inhabilitados = document.getElementsByClassName('inhabilitado');
    if (!inhabilitados || inhabilitados.length === 0) {
        console.log("No se encontró ningún elemento con la clase 'inhabilitado'.");
        return;
    }

    const btn = inhabilitados[0];
    btn.disabled = false;
    btn.style.backgroundColor = 'green'; // Cambio a color verde
    btn.className = 'habilitado';

    console.log("Botón habilitado y cambiado a color verde.");
})();
