const navBtn = document.querySelectorAll(".navBtn");
const mydropDown = document.querySelectorAll(".dropdown-content");

navBtn.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        mydropDown.classList.toggle("dropdown-unordered")
    })
});