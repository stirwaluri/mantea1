// 1. Smooth scrolling pentru navigare între secțiuni
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Meniu mobil
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

// Funcție pentru a deschide/închide meniul
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// 3. Animații simple la încărcarea paginii (fade-in pentru secțiuni)
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.classList.add('fade');
    });
});

// 4. Funcția pentru a adăuga o clasă de animație (fade-in)
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        if (section.offsetTop - 200 < scrollPosition) {
            section.classList.add('visible');
        }
    });
});
