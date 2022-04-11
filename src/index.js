"use strict";

const menuBox = document.querySelector(".mega__box");
const microsoftMenu = document.getElementById("microsoft__menu");
const hamburgerMenu = document.querySelector(".menu__bar");
const menuOption = document.querySelectorAll(".mega__links");
const header = document.querySelectorAll(".header");
const profile = document.querySelector(".about__me__tab");
const profileBtn = document.getElementById("tab__1");
const profileBtn2 = document.getElementById("tab__2");

const displayMenu = function () {
  menuBox.classList.toggle("hidden");
};

const closeMenu = function () {
  menuBox.classList.add("hidden");
};

const showProfile = function (e) {
  e.preventDefault();
  profile.classList.remove("hidden");
};

const closeProfile = function (e) {
  e.preventDefault();
  profile.classList.add("hidden");
};

for (let i = 0; i < header.length; i++)
  header[i].addEventListener("click", function (e) {
    /*
    for (let i = 0; i < menuOption.length; i++)
      menuOption[i].classList.toggle("visibility"); */
      e.target.nextElementSibling.classList.toggle("visibility");
      console.log(e);
  });

microsoftMenu.addEventListener("click", displayMenu);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Escape" && !menuBox.classList.contains("hidden")) {
    closeMenu();
  }
});

hamburgerMenu.addEventListener("click", displayMenu);

//-----ABOUT ME TAB----//
profileBtn2.addEventListener("click", showProfile);
profileBtn.addEventListener("click", closeProfile);

