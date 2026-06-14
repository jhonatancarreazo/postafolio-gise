// Detecta cuando un elemento entra en la pantalla
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Cuando entra, le pone la clase 'active'
            entry.target.classList.add('active');
        }
    });
});

// Selecciona todas las secciones que quieres animar
const hiddenElements = document.querySelectorAll('.scroll-fade');
hiddenElements.forEach((el) => observer.observe(el));