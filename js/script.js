//Togle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger-menu di klik
document.querySelector("#menu-icon").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klick di luar slidebar untuk meng hide nav-nya
const hamburger = document.querySelector("#menu-icon");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
