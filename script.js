/* ===============================
   Smooth Scroll for Navbar Links
================================ */
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* ===============================
   Sticky Header on Scroll
================================ */
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

/* ===============================
   Active Menu Highlight
================================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* ===============================
   Contact Form Submit Alert
================================ */
const form = document.querySelector(".contact-form form");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your enquiry has been sent successfully 😊");
        form.reset();
    });
}

/* ===============================
   Scroll Animation (Fade Up)
================================ */
const animatedItems = document.querySelectorAll(
    ".card, .service-card, .review-card, .offer-card"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

animatedItems.forEach(item => {
    observer.observe(item);
});
