//variables
let navbar = document.querySelector(".navbar");
let hamburger = document.querySelector(".hamburger");
let x = document.getElementById("showX");
hamburger.addEventListener("click", toggleHamburger);
let header = document.querySelector("header");
let helloBorder = document.querySelector(".hello")
let navLinks = document.querySelectorAll(".nav-links")
//hamburger menu
function toggleHamburger() {
  navbar.classList.toggle("showNav");
  if (x.textContent === "|||") {
    x.textContent = "X";
    header.setAttribute("id", "background");
  } else {
    x.textContent = "|||";
    
  }
}

//close hamburger menu when user clicks on link
navLinks.forEach(link => {
  link.addEventListener("click", toggleHamburger);
})

//show header background on scroll.
function showBackground() {
  if (scrollY > 50) {
   header.setAttribute("id", "background");
  } 
  if (scrollY <= 50) {
    header.removeAttribute("id");
  }
}
window.addEventListener("scroll", showBackground);

/*TODO fix scroll border change for Hello World
function toggleHelloBorder() {
  if (scrollY > 5) {
    helloBorder.setAttribute("class", "helloBorder")
  } 
  if (scrollY <= 5) {
    helloBorder.removeAttribute("class")
  }
}
helloBorder.addEventListener("scroll", toggleHelloBorder);*/
