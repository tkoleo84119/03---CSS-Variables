"use strict";

const controls = document.querySelector(".controls");
const root = document.documentElement;

const inputType = {
  spacing(value) {
    root.style.setProperty("--spacing", `${value}px`);
  },
  blur(value) {
    root.style.setProperty("--blur", `${value}px`);
  },
  base(value) {
    root.style.setProperty("--base-color", `${value}`);
  },
};

const changeStyles = function (e) {
  const { name, value } = e.target;
  inputType[name](value);
};

controls.addEventListener("input", changeStyles);
