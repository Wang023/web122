// Gana Sehaki 07/13/2025

// HAMBURGER
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
)  

document.querySelector(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove(".actve");
    navMenu.classList.remove(".active");
}))

// // BOTTOM NAVBAR
// document.addEventListener('DOMContentLoaded', function () {
//   window.addEventListener('scroll', function () {
//     const navbar = document.querySelector('.bottom-navbar');
//     if (window.scrollY > 100) {
//       navbar.classList.add('show');
//     } else {
//       navbar.classList.remove('show');
//     }
//   });
// });

// NAV BAR TOP
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
  });
});






















// const hamburger = document.querySelector('.hamburger');
// const navMenu   = document.querySelector('.nav-menu');
// const navLinks  = document.querySelectorAll('.nav-link');   // grab them all

// //  toggle the panel
// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('active');
//   navMenu.classList.toggle('active');
// });

// //  close the panel when any link is clicked
// navLinks.forEach(link =>
//   link.addEventListener('click', () => {
//     hamburger.classList.remove('active');
//     navMenu.classList.remove('active');
//   })
// );
