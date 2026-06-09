// --- 1. Active Navbar Link on Scroll (Scrollspy) ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar .nav-links a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Smooth transition ke liye 150px ka offset
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navbar .nav-links a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// --- 2. Coming Soon Buttons Click Block ---
const disabledButtons = document.querySelectorAll('.btn-disabled');
disabledButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // Kisi bhi kism ka click action ya jump rokne ke liye
    });
});

// --- 3. Contact Form Submission Handling ---
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Page ko automatic refresh hone se rokne ke liye
        
        const name = contactForm.querySelector('input[type="text"]').value;
        
        // Alert Popup Notification
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        
        // Form fields clear karna
        contactForm.reset();
    });
}