"use strict";

const allPageLinks = document.querySelectorAll("a");
console.log(allPageLinks);

const dialog = document.querySelector(".alert");
console.log(dialog);

const dialogCloseBtn = dialog.querySelector(".btn");
console.log(dialogCloseBtn);

for (let index = 0; index < allPageLinks.length; index++){
    allPageLinks[index].addEventListener("click", function () {
        dialog.classList.remove("hidden");
    });
}

dialogCloseBtn.addEventListener("mouseover", function () {
    this.style.cursor = "pointer";
})

dialogCloseBtn.addEventListener("click", function () {
    dialog.classList.add("hidden");
})