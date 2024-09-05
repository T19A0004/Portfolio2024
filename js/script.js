document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const header = document.querySelector('header');
    const openIcon = document.querySelector('.open-icon');
    const closeIcon = document.querySelector('.close-icon');

    menuToggle.addEventListener('click', () => {
        if (navbar.classList.contains('open')) {
            navbar.classList.remove('open');
            navbar.classList.add('close'); // Add close animation
            setTimeout(() => {
                navbar.classList.remove('close'); // Remove class after animation
                header.classList.remove('menu-open'); // Restore header shadow
            }, 300); // Match the duration of the closing animation
        } else {
            navbar.classList.remove('close');
            navbar.classList.add('open'); // Add open animation
            header.classList.add('menu-open'); // Remove header shadow
        }
        openIcon.style.display = navbar.classList.contains('open') ? 'none' : 'block';
        closeIcon.style.display = navbar.classList.contains('open') ? 'block' : 'none';
    });
});
