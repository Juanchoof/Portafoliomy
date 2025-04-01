// Función para animar el mensaje de bienvenida
function animarBienvenida() {
    const welcomeText = document.getElementById('welcomeText');
    welcomeText.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
    welcomeText.style.transform = 'translateY(0)';
    welcomeText.style.opacity = 1;
}

// Animar el mensaje de bienvenida cuando la página cargue
window.addEventListener('load', function() {
    const welcomeText = document.getElementById('welcomeText');
    welcomeText.style.transform = 'translateY(100px)'; // Empieza fuera de la pantalla
    welcomeText.style.opacity = 0; // Inicialmente invisible
    animarBienvenida();
});

// Función para activar animación de los elementos al hacer scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(function(el) {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('animate-on-scroll'); // Activa la animación
        }
    });
});
