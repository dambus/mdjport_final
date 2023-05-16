"use strict";

const mobileMenuToggle = document.querySelector(".toggle-menu");
const mobileNavItems = document.querySelector(".mobile-nav-items");
const mobileNavItem = document.querySelectorAll(".mobile-nav-items--item");
const navBar = document.querySelector(".header");
let navBarHeight = navBar.getBoundingClientRect().height;
const navBarLinks = document.querySelectorAll(".nav a");
const logo = document.querySelector(".header__logo");
const showCases = document.querySelectorAll(".showcase__imageholder");

const toggleCSSClasses = (el, ...cls) =>
  cls.map((cl) => el.classList.toggle(cl));

mobileNavItem.forEach(function (currentValue, currentIndex, listObj) {
  listObj[currentIndex].addEventListener("click", function () {
    mobileMenuToggle.click();
  });
});

mobileMenuToggle.addEventListener("click", function () {
  mobileMenuToggle.classList.toggle("mob-active");
  toggleCSSClasses(mobileNavItems, "no-opacity", "hidden");
  mobileNavItem.forEach(function (currentValue, currentIndex, listObj) {
    // console.log(listObj[currentIndex]);
    toggleCSSClasses(listObj[currentIndex], "no-opacity");
  });
});

navBarLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      top: 100,
      behavior: "smooth",
      block: "start",
    });
  });
});

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll

window.addEventListener("scroll", navHighlighter);
// window.addEventListener("scroll", navBarChanger);

function navHighlighter() {
  // Get current scroll position
  // let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 360;
    let sectionId = current.getAttribute("id");
    // console.log(sectionId);

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // document
      //   .querySelector("a[href*=" + sectionId + "]")
      //   .classList.add("active");
      document
        .querySelector(`[data-anchor="#${sectionId}"]`)
        .classList.add("active");
    } else {
      document
        .querySelector(`[data-anchor="#${sectionId}"]`)
        .classList.remove("active");
    }
  });
}
