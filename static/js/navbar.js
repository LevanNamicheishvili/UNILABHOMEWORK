const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".navlinks")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

