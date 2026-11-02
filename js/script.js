
// Efeito cascata

document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Dispara quando 10% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Opcional: parar de observar após animar
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.cascade-item').forEach(item => {
        observer.observe(item);
    });
});

