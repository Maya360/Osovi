// Esta Animacion hace que el loader desaparezca despues de 3 segundos
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const loaderContainer = document.getElementById('loader-container');
        if (loaderContainer) {
            loaderContainer.style.display = 'none';
        }
    }, 500); // Tiempo en milisegundos
});
