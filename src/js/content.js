import data from "./data";
import { createEl , addHtml } from "./functions";

const WRAPPER = document.querySelector('.wrapper');

const content = () => {
  let container = createEl('div', ['container'], '');

  let title = createEl('h1', ['title', 'glitch'], 'Virtual Keyboard');
  let textarea = createEl('textarea', ['textarea'], '');
  // let keyboard = createEl('div', ['keyboard'], '')
  // let keyRow = createEl('div', ['keyboard-inner'], '')

  // // for (let i = 0; i < data.en["keys-row-1"].length; i++) {
  // //   let key = 
  // // }

  addHtml(WRAPPER, container);
  addHtml(container, title);
  addHtml(container, textarea);
  // addHtml(container, keyboard);
  // addHtml(keyboard, keyRow);
};

export default content;