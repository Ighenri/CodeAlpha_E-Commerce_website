
const noDisplay = document.querySelector(".nodisplay");
const menuBar = document.querySelector(".menubar");


menuBar.addEventListener("click", function () {
    noDisplay.classList.toggle("nav-open")
})