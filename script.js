const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
    sideMenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
    sideMenu.style.transform = "translateX(16rem)";
}

window.addEventListener('scroll', () => {
    if(scrollY > 50) {
        navBar.classList.add("bg-white", "bg-opacity-50", "backdrop-blur-lg", "shadow-sm", "dark:bg-darkTheme", "dark:shadow-white/20");
        navLinks.classList.remove("bg-white", "shadow-sm", "bg-opacity-50", "dark:border", "dark:border-white/50", "dark:bg-transparent");
    } else {
        navBar.classList.remove("bg-white", "bg-opacity-50", "backdrop-blur-lg", "shadow-sm", "dark:bg-darkTheme", "dark:shadow-white/20");
        navLinks.classList.add("bg-white", "shadow-sm", "bg-opacity-50", "dark:border", "dark:border-white/50", "dark:bg-transparent");
    }
});


// light and dark mode

if(localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark")
} else {
    document.documentElement.classList.remove("dark")
}

function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    if(document.documentElement.classList.contains("dark")){
        localStorage.theme = "dark";
    } else {
        localStorage.theme = "light";
    }
}

// scroll animation

const cards = document.querySelectorAll('.scroll-reveal');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cardIndex = Array.from(cards).indexOf(entry.target);
            const delay = cardIndex * 150; 
            setTimeout(() => {
                entry.target.classList.add('animate-card-fade-in');
                entry.target.classList.remove('opacity-0');
            }, delay);
        } else {
            entry.target.classList.remove('animate-card-fade-in');
            entry.target.classList.add('opacity-0');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

cards.forEach(card => {
    observer.observe(card);
});



//typing animation
const typedTitleSpan = document.getElementById("typed-title");
const cursorSpan = document.querySelector(".cursor");

const phrases = ["Full Stack Web Developer (MERN)"];
const typingSpeed = 100; 
const erasingSpeed = 50; 
const delayBetweenPhrases = 1500; 

let phraseIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < phrases[phraseIndex].length) {
    typedTitleSpan.textContent += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenPhrases);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTitleSpan.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (phrases.length) {
    setTimeout(type, 1500);
  }
});


const sectionsToAnimate = document.querySelectorAll('.section-reveal, .scroll-reveal');


const sectionObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};


const sectionObserverCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const isCard = entry.target.classList.contains('scroll-reveal');
            
            if (isCard) {
                const cardIndex = Array.from(document.querySelectorAll('.scroll-reveal')).indexOf(entry.target);
                const delay = cardIndex * 150;
                setTimeout(() => {
                    entry.target.classList.add('animate-card-fade-in');
                    entry.target.classList.remove('opacity-0');
                }, delay);
            } else {
                entry.target.classList.add('animate-card-fade-in');
                entry.target.classList.remove('opacity-0');
            }
        } else {
            entry.target.classList.remove('animate-card-fade-in');
            entry.target.classList.add('opacity-0');
        }
    });
};

const sectionObserver = new IntersectionObserver(sectionObserverCallback, sectionObserverOptions);

sectionsToAnimate.forEach(element => {
    sectionObserver.observe(element);
});


