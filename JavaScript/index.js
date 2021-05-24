const navLinks = document.querySelectorAll(".navLink");
let isMobile = false;

if (window.screen.width <= 700) {
    isMobile = true;
}
let lastScrollTop = window.pageYOffset;
document.querySelector("#menuDrop").addEventListener("click", mobileMenuToggle);
if (!isMobile) {
    document.addEventListener("scroll", () => {
        let currentYPos = window.pageYOffset;
        const button = document.querySelector(".backToTopBtn");
        if (currentYPos <= 5) {
            button.classList.remove("revealElement");
            button.classList.add("hideElement");
        } else {
            button.classList.add("revealElement");
        }

    });
}
for (let link of navLinks) {
    link.addEventListener("click", mobileMenuToggle);
}

function mobileMenuToggle() {
    document.querySelector(".mobileDropdown").classList.toggle("revealElement");
}

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  };
  
  function observerCallback(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fadeIn");
      } 
    });
  }
  
  const fadeElements = document.querySelectorAll(".fade");
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  fadeElements.forEach(element => observer.observe(element));