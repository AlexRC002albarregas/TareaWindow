function elementoLyoko() {
    const element = document.createElement('div');
    element.className = 'elemento-lyoko';

    //Esto sirve para que la posicion en horizontal en la que salga el elemento sea totalmente aleatoria.
    element.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
    document.getElementById('container').appendChild(element);

    setTimeout(() => {

        // Elimina el elemento al caer del todo.
        element.remove();
    }, 4000); 
}

// Crea elementos cada 0,8 segundos aprox.
setInterval(elementoLyoko, 600); 
