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
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".unlock button");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const targetClass = event.currentTarget.dataset.target;
      const action = event.currentTarget.dataset.action;
      const targetContents = document.querySelectorAll(targetClass);
      const parent = event.currentTarget.parentElement;
      const showButton = parent.querySelector(".show-btn");
      const hideButton = parent.querySelector(".hide-btn");
      if (targetContents && showButton && hideButton) {
        if (action === "show") {
          targetContents.forEach((content) => {
            content.classList.remove("hidden");
          });
          showButton.classList.add("hidden");
          hideButton.classList.remove("hidden");
        } else if (action === "hide") {
          targetContents.forEach((content) => {
            content.classList.add("hidden");
          });
          hideButton.classList.add("hidden");
          showButton.classList.remove("hidden");
        }
      }
    });
  });
});
