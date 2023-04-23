
const noDisplay = document.querySelector(".nodisplay");
const menuBar = document.querySelector(".menubar");

menuBar.addEventListener("click",  () => {
    noDisplay.classList.toggle("nav-open");

});

const dropdownBtns = document.querySelectorAll(".dropbtn");
const dropdownLists = document.querySelectorAll(".mydropdown");

dropdownBtns.forEach(function(dropdownBtn, index) {
  dropdownBtn.addEventListener("click", function() {
    if (dropdownLists[index].style.display === "none") {
      closeAllDropdownLists();
      dropdownLists[index].style.display = "block";
    } else {
      dropdownLists[index].style.display = "none";
    }
  });
});

function closeAllDropdownLists() {
  dropdownLists.forEach(function(dropdownList) {
    dropdownList.style.display = "none";
  });
}

dropdownLists.forEach(function(dropdownList) {
  const options = dropdownList.getElementsByTagName("li");
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function() {
      const selectedOption = this.innerHTML;
      const dropdownBtn = this.parentNode.parentNode.previousSibling;
      dropdownBtn.innerHTML = selectedOption + " <span class='caret'></span>";
      dropdownList.style.display = "none";
    });
  }
});

