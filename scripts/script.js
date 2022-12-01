console.log("test");

// Menu button in Nav // 
var menuButton = document.querySelector("header nav button");
var navMenu = document.querySelector("nav ul:last-of-type")

menuButton.addEventListener("click", openMenu);

function openMenu() {
    navMenu.classList.toggle("navAnders");
  }

