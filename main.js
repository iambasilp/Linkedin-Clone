let navMenu = document.querySelector(".menu")
let navToggle = document.querySelector(".nav_toggle")
let navClose = document.querySelector(".nav_close")
console.log(navClose)
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show_menu")
        console.log("clicked")
    })
}
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show_menu")
    })
}

let navLinks = document.querySelectorAll(".nav_link")

navLinks.forEach((navLink)=>{
    navLink.addEventListener("click", ()=>{
        navMenu.classList.remove("show_menu")
    })
})