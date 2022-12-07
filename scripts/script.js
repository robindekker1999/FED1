console.log("test");

// Menu button in Nav // 
var menuButton = document.querySelector("header nav button");
var navMenu = document.querySelector("nav ul:last-of-type");

menuButton.addEventListener("click", openMenu);

function openMenu() {
    navMenu.classList.toggle("navAnders");
  }

// Character page 
var uitklapPijl = document.querySelector(".characters main ul li button");
var characterInfo = document.querySelector(".characters main ul li div");

uitklapPijl.addEventListener("click", openCharacter);

function openCharacter(){
    characterInfo.classList.toggle("charactersUitgeklapt")
}


var marioImage = document.querySelector(".characters main ul li img:first-of-type");

uitklapPijl.addEventListener("click", andereMario);

/* function andereMario(){
    marioImage.src = "../mario-images/anderemario.png";
} */

// function andereMario(){
//     if (marioImage.getAttribute('src') == "../mario-images/mariomario.png"){
//         marioImage.src = "../mario-images/anderemario.png"
//     }
//     else{
//         marioImage.src = "../mario-images/mariomario.png"
//     }
// }

