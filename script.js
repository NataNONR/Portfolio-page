const navbar = document.querySelector(".navbar-scroll");
window.onscroll = () => {
  if (window.scrollY > 600) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};
