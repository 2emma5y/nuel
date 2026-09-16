// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks?.classList.remove("active");
    });
});


// ===============================
// TYPING ANIMATION
// ===============================

const typingText = document.querySelector("#typing-text");

const words = [
    "Web Developer",
    "AI Enthusiast",
    "Digital Researcher",
    "Content Creator",
    "Automotive Engineer"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent = currentWord.substring(0, characterIndex + 1);
        characterIndex++;

        if (characterIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingText.textContent = currentWord.substring(0, characterIndex - 1);
        characterIndex--;

        if (characterIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const sections = document.querySelectorAll(
    "section, .service, .project, .skill"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});


// ===============================
// SMOOTH SCROLLING
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Close mobile menu after clicking a link
            if (navLinks) {
                navLinks.classList.remove("active");
            }
        }
    });
});


// ===============================
// GITHUB BUTTON
// ===============================

const githubButton = document.querySelector("#github-btn");

if (githubButton) {
    githubButton.addEventListener("click", (e) => {
        // Allow normal link behavior
        e.preventDefault();
        window.open("https://github.com/2emma5", "_blank");
    });
}


// ===============================
// EMAIL BUTTON
// ===============================

const emailButton = document.querySelector("#email-btn");

if (emailButton) {
    emailButton.addEventListener("click", (e) => {
        // Allow normal link behavior
        e.preventDefault();
        window.location.href = "mailto:your-panyah65@gmail.com";
    });
}


// ===============================
// CURRENT YEAR
// ===============================

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ===============================
// ACTIVE NAVIGATION
// ===============================

window.addEventListener("scroll", () => {
    const currentPosition = window.scrollY;

    document.querySelectorAll("section[id]").forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        const link = document.querySelector(
            `.nav-links a[href="#${sectionId}"]`
        );

        if (
            currentPosition >= sectionTop &&
            currentPosition < sectionTop + sectionHeight
        ) {
            document
                .querySelectorAll(".nav-links a")
                .forEach(item => item.classList.remove("active"));

            if (link) {
                link.classList.add("active");
            }
        }
    });
});
