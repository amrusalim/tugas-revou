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

//slide-show image

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("about-image");
  if (n > imgList.length) slideIndex = 1;
  else if (n < 1) slideIndex = imgList.length;

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  // array dimulai dari 0=0,1,2
  imgList[slideIndex - 1].style.display = "block";
}

// set interval( agar bisa slide show)
setInterval(() => {
  // ...dipanggil ke sini
  plusDivs(1);
}, 2000);
