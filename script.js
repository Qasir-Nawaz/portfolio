/* --- CodeAlpha Personal Portfolio - Main JavaScript --- */

document.addEventListener('DOMContentLoaded', () => {
    // Elements select karein
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const sections = document.querySelectorAll('section');
    const navAnchors = document.querySelectorAll('.nav-links a');

    // ==========================================
    // 1. 📱 MOBILE NAVBAR TOGGLE LOGIC
    // ==========================================
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Click events ko crash hone se bachata hai
            
            // Toggle active class on links to show/hide dropdown
            navLinks.classList.toggle('active');
            
            // Dynamic Icon switch (☰ bars se lekar X mark tak)
            const icon = menuBtn.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.className = 'fa-solid fa-xmark'; // Open hone par X dikhega
                } else {
                    icon.className = 'fa-solid fa-bars';  // Close hone par wapas ☰
                }
            }
        });

        // Jab kisi bhi link par click ho toh mobile menu khud hi close ho jaye
        navAnchors.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.className = 'fa-solid fa-bars';
                }
            });
        });

        // Agar dropdown khula ho aur user screen par kahin aur click kare toh menu close ho jaye
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.className = 'fa-solid fa-bars';
                }
            }
        });
    }

    // ==========================================
    // 2. 🎯 ACTIVE LINK ON SCROLL LOGIC
    // ==========================================
    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Page scroll position aur section match check
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute('id');
            }
        });

        navAnchors.forEach(anchor => {
            anchor.classList.remove('active');
            if (anchor.getAttribute('href') === `#${currentSection}`) {
                anchor.classList.add('active');
            }
        });
    });
});