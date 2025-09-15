"use strict";
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const Javo1 = document.querySelectorAll(".Javo1");
const Javo2 = document.querySelectorAll(".Javo2");
document
  .querySelector(".Javo2-sub")
  .addEventListener("click", function (event) {
    const emailValue = document.querySelector(".email").value;
    if (regex.test(emailValue)) {
      Javo1.forEach((item) => item.classList.remove("hidden"));
      Javo2.forEach((item) => item.classList.add("hidden"));
    } else {
      alert("Email không hợp lệ");
    }
  });
const Core1 = document.querySelectorAll(".Core1");
const Core2 = document.querySelectorAll(".Core2");
const Core3 = document.querySelectorAll(".Core3");
const Core4 = document.querySelectorAll(".Core4");
const Core5 = document.querySelectorAll(".Core5");
const Core6 = document.querySelectorAll(".Core6");
const More1 = document.querySelectorAll(".View-more-1");
const Less1 = document.querySelectorAll(".View-less-1");
const More2 = document.querySelectorAll(".View-more-2");
const Less2 = document.querySelectorAll(".View-less-2");
const More3 = document.querySelectorAll(".View-more-3");
const Less3 = document.querySelectorAll(".View-less-3");
const More4 = document.querySelectorAll(".View-more-4");
const Less4 = document.querySelectorAll(".View-less-4");
const More5 = document.querySelectorAll(".View-more-5");
const Less5 = document.querySelectorAll(".View-less-5");
const More6 = document.querySelectorAll(".View-more-6");
const Less6 = document.querySelectorAll(".View-less-6");
const Core11 = document.querySelectorAll(".Core1-1");
const Core21 = document.querySelectorAll(".Core2-1");
const Core31 = document.querySelectorAll(".Core3-1");
const Core41 = document.querySelectorAll(".Core4-1");
const Core51 = document.querySelectorAll(".Core5-1");
const Core61 = document.querySelectorAll(".Core6-1");
document
  .querySelector(".View-more-1")
  .addEventListener("click", function (event) {
    Core1.forEach((item) => item.classList.remove("hidden"));
    More1.forEach((item) => item.classList.add("hidden"));
    Less1.forEach((item) => item.classList.remove("hidden"));
    Core11.forEach((item) => item.classList.remove("Core1-1"));
    Core21.forEach((item) => item.classList.remove("Core2-1"));
    Core31.forEach((item) => item.classList.remove("Core3-1"));
  });
document
  .querySelector(".View-less-1")
  .addEventListener("click", function (event) {
    Core1.forEach((item) => item.classList.add("hidden"));
    More1.forEach((item) => item.classList.remove("hidden"));
    Less1.forEach((item) => item.classList.add("hidden"));
    Core11.forEach((item) => item.classList.add("Core1-1"));
    Core21.forEach((item) => item.classList.add("Core2-1"));
    Core31.forEach((item) => item.classList.add("Core3-1"));
  });
document
  .querySelector(".View-more-2")
  .addEventListener("click", function (event) {
    Core2.forEach((item) => item.classList.remove("hidden"));
    More2.forEach((item) => item.classList.add("hidden"));
    Less2.forEach((item) => item.classList.remove("hidden"));
    Core11.forEach((item) => item.classList.remove("Core1-1"));
    Core21.forEach((item) => item.classList.remove("Core2-1"));
    Core31.forEach((item) => item.classList.remove("Core3-1"));
  });
document
  .querySelector(".View-less-2")
  .addEventListener("click", function (event) {
    Core2.forEach((item) => item.classList.add("hidden"));
    More2.forEach((item) => item.classList.remove("hidden"));
    Less2.forEach((item) => item.classList.add("hidden"));
    Core11.forEach((item) => item.classList.add("Core1-1"));
    Core21.forEach((item) => item.classList.add("Core2-1"));
    Core31.forEach((item) => item.classList.add("Core3-1"));
  });
document
  .querySelector(".View-more-3")
  .addEventListener("click", function (event) {
    Core3.forEach((item) => item.classList.remove("hidden"));
    More3.forEach((item) => item.classList.add("hidden"));
    Less3.forEach((item) => item.classList.remove("hidden"));
    Core11.forEach((item) => item.classList.remove("Core1-1"));
    Core21.forEach((item) => item.classList.remove("Core2-1"));
    Core31.forEach((item) => item.classList.remove("Core3-1"));
  });
document
  .querySelector(".View-less-3")
  .addEventListener("click", function (event) {
    Core3.forEach((item) => item.classList.add("hidden"));
    More3.forEach((item) => item.classList.remove("hidden"));
    Less3.forEach((item) => item.classList.add("hidden"));
    Core11.forEach((item) => item.classList.add("Core1-1"));
    Core21.forEach((item) => item.classList.add("Core2-1"));
    Core31.forEach((item) => item.classList.add("Core3-1"));
  });
document
  .querySelector(".View-more-4")
  .addEventListener("click", function (event) {
    Core4.forEach((item) => item.classList.remove("hidden"));
    More4.forEach((item) => item.classList.add("hidden"));
    Less4.forEach((item) => item.classList.remove("hidden"));
    Core41.forEach((item) => item.classList.remove("Core4-1"));
    Core51.forEach((item) => item.classList.remove("Core5-1"));
    Core61.forEach((item) => item.classList.remove("Core6-1"));
  });
document
  .querySelector(".View-less-4")
  .addEventListener("click", function (event) {
    Core4.forEach((item) => item.classList.add("hidden"));
    More4.forEach((item) => item.classList.remove("hidden"));
    Less4.forEach((item) => item.classList.add("hidden"));
    Core41.forEach((item) => item.classList.add("Core4-1"));
    Core51.forEach((item) => item.classList.add("Core5-1"));
    Core61.forEach((item) => item.classList.add("Core6-1"));
  });
document
  .querySelector(".View-more-5")
  .addEventListener("click", function (event) {
    Core5.forEach((item) => item.classList.remove("hidden"));
    More5.forEach((item) => item.classList.add("hidden"));
    Less5.forEach((item) => item.classList.remove("hidden"));
    Core41.forEach((item) => item.classList.remove("Core4-1"));
    Core51.forEach((item) => item.classList.remove("Core5-1"));
    Core61.forEach((item) => item.classList.remove("Core6-1"));
  });
document
  .querySelector(".View-less-5")
  .addEventListener("click", function (event) {
    Core5.forEach((item) => item.classList.add("hidden"));
    More5.forEach((item) => item.classList.remove("hidden"));
    Less5.forEach((item) => item.classList.add("hidden"));
    Core41.forEach((item) => item.classList.add("Core4-1"));
    Core51.forEach((item) => item.classList.add("Core5-1"));
    Core61.forEach((item) => item.classList.add("Core6-1"));
  });
document
  .querySelector(".View-more-6")
  .addEventListener("click", function (event) {
    Core6.forEach((item) => item.classList.remove("hidden"));
    More6.forEach((item) => item.classList.add("hidden"));
    Less6.forEach((item) => item.classList.remove("hidden"));
    Core41.forEach((item) => item.classList.remove("Core4-1"));
    Core51.forEach((item) => item.classList.remove("Core5-1"));
    Core61.forEach((item) => item.classList.remove("Core6-1"));
  });
document
  .querySelector(".View-less-6")
  .addEventListener("click", function (event) {
    Core6.forEach((item) => item.classList.add("hidden"));
    More6.forEach((item) => item.classList.remove("hidden"));
    Less6.forEach((item) => item.classList.add("hidden"));
    Core41.forEach((item) => item.classList.add("Core4-1"));
    Core51.forEach((item) => item.classList.add("Core5-1"));
    Core61.forEach((item) => item.classList.add("Core6-1"));
  });
