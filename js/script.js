document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const header = document.querySelector('header');
    const openIcon = document.querySelector('.open-icon');
    const closeIcon = document.querySelector('.close-icon');
    const welcome = document.querySelector('.hero-content svg');

    function draw() {
        welcome.classList.add('active')
    }
    draw();

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
        // Toggle visibility of menu icons
        openIcon.style.display = navbar.classList.contains('open') ? 'none' : 'block';
        closeIcon.style.display = navbar.classList.contains('open') ? 'block' : 'none';
    });

    let lastX = 0;
    let lastY = 0;
    let minDistance = 25; // Minimum distance between prints
    let isLeft = true; // Toggle to alternate paw prints between left and right

    document.addEventListener('mousemove', (event) => {
        const { pageX: currentX, pageY: currentY } = event;

        // Calculate distance from last print position
        const distance = Math.hypot(currentX - lastX, currentY - lastY);

        // Only create a new paw print if the cursor moved a sufficient distance
        if (distance > minDistance) {
            createPawPrint(currentX, currentY, lastX, lastY, isLeft);
            lastX = currentX;
            lastY = currentY;
            isLeft = !isLeft; // Toggle between left and right prints
        }
    });

    function createPawPrint(currentX, currentY, lastX, lastY, isLeft) {
        const pawPrint = document.createElement('img');
        pawPrint.src = './img/cat-paw.svg'; // Adjust path if necessary
        pawPrint.classList.add('paw-print');

        // Calculate the angle of rotation so the top of the paw points towards the cursor movement
        const angle = Math.atan2(currentY - lastY, currentX - lastX) * (180 / Math.PI) + 90;

        // Offset based on the angle of movement for more natural placement
        const offsetDirection = Math.atan2(currentY - lastY, currentX - lastX);
        const offsetX = Math.cos(offsetDirection + (isLeft ? Math.PI / 2 : -Math.PI / 2)) * 15;
        const offsetY = Math.sin(offsetDirection + (isLeft ? Math.PI / 2 : -Math.PI / 2)) * 15;

        pawPrint.style.left = `${currentX + offsetX}px`;
        pawPrint.style.top = `${currentY + offsetY}px`;
        pawPrint.style.transform = `rotate(${angle}deg)`; // Rotate the paw print to follow cursor direction

        document.body.appendChild(pawPrint);

        // Fade out and remove the print after 3 seconds
        setTimeout(() => {
            pawPrint.style.opacity = 0;
            setTimeout(() => pawPrint.remove(), 500); // Remove after fade-out animation
        }, 2000);
    }


    const observerOptions = {
        threshold: 0.5 // Trigger when 50% of the element is visible
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, observerOptions);

    // Select all elements with the class .fade-in-element
    const fadeElements = document.querySelectorAll(".fade-in-element");
    fadeElements.forEach(el => fadeInObserver.observe(el));
});
