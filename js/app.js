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
  //for / foreach / for...of
  sectionList.forEach((section) => {
    const liItem = document.createElement("li");
    liItem.innerHTML = `<a href="#${section.id}" class="menu__link" >${section.dataset.nav}</a>`;
    // liItem.insertAdjacentHTML(
    //   "afterbegin",
    //   `<a href="#${section.id}" class="menu__link" >${section.dataset.nav}</a>`
    // );
    navbarUl.appendChild(liItem);
  });
}

// Add class 'active' to section when near top of viewport
function activeMe() {
  for (section of sectionList) {
    const choosenSection = document.querySelector(`a[href="#${section.id}"]`);
    if (
      section.getBoundingClientRect().top >= 0 &&
      section.getBoundingClientRect().top <= 275
    ) {
      section.classList.add("your-active-class");
      choosenSection.classList.add("active-on");
    } else {
      section.classList.remove("your-active-class");
      choosenSection.classList.remove("active-on");
    }
  }
}
// Scroll to anchor ID using scrollTO event smooth brhavior
navbarUl.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log(event); used it to get event.path[0].hash from console using developer tool
  document
    .querySelector(event.path[0].hash)
    .scrollIntoView({ behavior: "smooth" });
});
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
renderNavbar();
// Scroll to section on link click
document.addEventListener("scroll", activeMe);
