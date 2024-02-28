// Récupérer le bouton et le corps du document
const body = document.body;
const section = document.section;
// Récupérer les éléments nécessaires
const themeToggleBtn = document.getElementById('theme-toggle');
const projects = document.querySelectorAll('.project');
const aboutSection = document.getElementById('about');
const aboutToggleBtn = document.getElementById('about-toggle');

// Changement de thème avec animation
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggleBtn.classList.toggle('theme-toggle-clicked');

    // Retirer la classe après un court délai pour réinitialiser l'effet de clic
    setTimeout(() => {
        themeToggleBtn.classList.remove('theme-toggle-clicked');
    }, 1000);
});

// Effet de survol pour les projets
projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.classList.add('project-hovered');
    });

    project.addEventListener('mouseleave', () => {
        project.classList.remove('project-hovered');
    });

    // Rediriger vers une URL spécifique au clic sur un projet
    project.addEventListener('click', () => {
        window.location.href = project.dataset.url;
    });
});

// Afficher/masquer la section "À propos de moi"
aboutToggleBtn.addEventListener('click', () => {
    aboutSection.classList.toggle('about-hidden');
});

// Animation de défilement doux pour les liens du menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation de pulsation pour le bouton "Masquer/afficher À propos de moi"
aboutToggleBtn.addEventListener('mouseenter', () => {
    aboutToggleBtn.classList.add('button-pulse');
});

aboutToggleBtn.addEventListener('mouseleave', () => {
    aboutToggleBtn.classList.remove('button-pulse');
});

