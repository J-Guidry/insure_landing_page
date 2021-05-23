const switches = document.querySelectorAll(".switch");
const navbar = document.querySelector("#navbar");
const mobileToggle = document.querySelector(".mobile-switch");

const toggleARIA = () => {
  if (
    mobileToggle.getAttribute("aria-expanded") === "false" &&
    navbar.getAttribute("aria-hidden") === "true"
  ) {
    mobileToggle.setAttribute("aria-expanded", "true");
    navbar.setAttribute("aria-hidden", "false");
  } else {
    mobileToggle.setAttribute("aria-expanded", "false");
    navbar.setAttribute("aria-hidden", "true");
  }
};

const toggleNav = (swch) => {
  if (swch.target.classList.contains("open-img")) {
    swch.target.classList.toggle("mobile-close");
    navbar.classList.toggle("mobile-close");
    swch.target.nextElementSibling.classList.toggle("mobile-close");
    toggleARIA();
  } else {
    swch.target.classList.toggle("mobile-close");
    navbar.classList.toggle("mobile-close");
    swch.target.previousElementSibling.classList.toggle("mobile-close");
    toggleARIA();
  }
};

Array.from(switches).forEach((swtch) => {
  swtch.addEventListener("click", toggleNav);
});
