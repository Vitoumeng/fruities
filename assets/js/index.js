// Toggle nav-menu
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");

const toggleMenu = (navBtn, navMenu) => {
  navBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
};

toggleMenu(navToggle, navMenu);
toggleMenu(navClose, navMenu);

// Click nav-link close nav-menu
const Links = document.querySelectorAll(".nav__link");

const navLink = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("show-menu");
};

Links.forEach((n) => n.addEventListener("click", navLink));

// Background Header
const bgHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 380
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", bgHeader);

// Show Scrollup
const showScrollUp = () => {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY >= 650
    ? scrollup.classList.add("show-scroll")
    : scrollup.classList.remove("show-scroll");
};

window.addEventListener("scroll", showScrollUp);