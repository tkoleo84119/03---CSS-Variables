"use strict";

const controls = document.querySelector(".controls");
const root = document.documentElement;

const inputType = {
  /**
   * This function is change css variable(spacing).
   * @param {string} value - The value of spacing input.
   */
  spacing(value) {
    root.style.setProperty("--spacing", `${value}px`);
  },
  /**
   * This function is change css variable(blur).
   * @param {string} value - The value of blur input.
   */
  blur(value) {
    root.style.setProperty("--blur", `${value}px`);
  },
  /**
   * This function is change css variable(base-color).
   * @param {string} value - The name of color.
   */
  base(value) {
    root.style.setProperty("--base-color", `${value}`);
  },
};

/**
 * This function is change style base on input.
 * @param {object} e - The event object.
 */
const changeStyles = function (e) {
  const { name, value } = e.target;
  inputType[name](value);
};

controls.addEventListener("input", changeStyles);
