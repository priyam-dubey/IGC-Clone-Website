/* main.js - simple behaviour for navbar + mobile toggle + smooth scroll */

/* NAVBAR SCROLL EFFECT */
document.addEventListener("scroll", () => {
  const header = document.querySelector("#header");
  if (!header) return;
  if (window.scrollY > 60) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

/* MOBILE MENU TOGGLE */
(function setupMobileToggle(){
  const toggle = document.querySelector(".mobile-nav-toggle");
  const navbar = document.querySelector("#navbar");
  if (!toggle || !navbar) return;

  toggle.addEventListener("click", () => {
    navbar.classList.toggle("navbar-mobile");
    // swap icons
    if (toggle.classList.contains("bi-list")) {
      toggle.classList.remove("bi-list");
      toggle.classList.add("bi-x");
    } else {
      toggle.classList.remove("bi-x");
      toggle.classList.add("bi-list");
    }
  });

  // close mobile menu when a link clicked
  navbar.querySelectorAll("a.nav-link").forEach(a=>{
    a.addEventListener("click", () => {
      if (navbar.classList.contains("navbar-mobile")) {
        navbar.classList.remove("navbar-mobile");
        toggle.classList.remove("bi-x");
        toggle.classList.add("bi-list");
      }
    });
  });
})();

/* SMOOTH SCROLL for anchor links */
document.querySelectorAll('a.nav-link[href^="#"]').forEach(link=>{
  link.addEventListener("click", (e)=>{
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY - 80; // offset
    window.scrollTo({top: y, behavior: "smooth"});
  });
});
