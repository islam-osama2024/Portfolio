    // Navbar Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.navbar nav ul');

    menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    });

    // Scroll to Top Button
    const scrollTopButton = document.querySelector('.scroll-top');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
    // Navbar shadow
    navbar.style.backgroundColor = window.scrollY > 100 ? '#333' : 'transparent';

    // Show/Hide Scroll Top Button
    scrollTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';

    // Scroll reveal effect
    document.querySelectorAll('.section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
        section.classList.add('reveal');
        }
    });
    });

    // Scroll to Top Smooth
    scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth Scrolling for Navbar Links
    document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });

        // Auto-close menu on mobile
        navLinks.classList.remove('active');
    });
    });

    // Hover effect on service cards
    document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
    });

    // Contact form confirmation
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    form.reset();
    });






    window.addEventListener('load', () => {
        document.getElementById('loader').style.display = 'none';
    });

    const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
document.body.classList.toggle('dark');
});



