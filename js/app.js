/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sectionList = document.querySelectorAll("section");
const sectionListSize = sectionList.length;
const navbarUl = document.getElementById("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// build the nav
function renderNavbar() {
  for (let i = 0; i < sectionListSize; i++) {
    const listItem = document.createElement("li");
    listItem.insertAdjacentHTML(
      "afterbegin",
      `<a href="#${sectionList[i].id}" class="menu__link" >${sectionList[i].dataset.nav}</a>`
    );
    navbarUl.appendChild(listItem);
  }
}

// Add class 'active' to section when near top of viewport
function activeMe() {
  for (let i = 0; i < sectionListSize; i++) {
    if (
      sectionList[i].getBoundingClientRect().top >= 0 &&
      sectionList[i].getBoundingClientRect().top <= 400
    ) {
      sectionList[i].classList.add("your-active-class");
      document
        .querySelector(`a[href="#${sectionList[i].id}"]`)
        .classList.add("active-on");
    } else {
      sectionList[i].classList.remove("your-active-class");
      document
        .querySelector(`a[href="#${sectionList[i].id}"]`)
        .classList.remove("active-on");
    }
  }
}
// Scroll to anchor ID using scrollTO event
navbarUl.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href").substr(1);
  document
    .querySelector(`#${id}`)
    .scrollIntoView({ behavior: "smooth", block: "center" });
});
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.addEventListener("DOMContentLoaded", renderNavbar);

// Scroll to section on link click
document.addEventListener("scroll", activeMe);

// toggler
document.querySelector(".tower").addEventListener("click", function () {
  document.querySelector(".navbar__menu").classList.toggle("toggler");
});
