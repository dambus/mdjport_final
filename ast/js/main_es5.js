"use strict";

var mobileMenuToggle = document.querySelector(".toggle-menu");
var mobileNavItems = document.querySelector(".mobile-nav-items");
var mobileNavItem = document.querySelectorAll(".mobile-nav-items--item");
var navBar = document.querySelector(".header");
var navBarHeight = navBar.getBoundingClientRect().height;
var navBarLinks = document.querySelectorAll(".nav a");
var logo = document.querySelector(".header__logo");
var showCases = document.querySelectorAll(".showcase__imageholder");
var toggleCSSClasses = function toggleCSSClasses(el) {
  for (
    var _len = arguments.length,
      cls = new Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    cls[_key - 1] = arguments[_key];
  }
  return cls.map(function (cl) {
    return el.classList.toggle(cl);
  });
};
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
navBarLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      top: 100,
      behavior: "smooth",
      block: "start",
    });
  });
});

// Get all sections that have an ID defined
var sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll

window.addEventListener("scroll", navHighlighter);
// window.addEventListener("scroll", navBarChanger);

function navHighlighter() {
  // Get current scroll position
  // let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(function (current) {
    var sectionHeight = current.offsetHeight;
    var sectionTop = current.offsetTop - 360;
    var sectionId = current.getAttribute("id");
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
        .querySelector('[data-anchor="#'.concat(sectionId, '"]'))
        .classList.add("active");
    } else {
      document
        .querySelector('[data-anchor="#'.concat(sectionId, '"]'))
        .classList.remove("active");
    }
  });
}
