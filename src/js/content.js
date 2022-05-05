import data from "./data";
import { createEl , addHtml } from "./functions";

const WRAPPER = document.querySelector('.wrapper');

const content = () => {
  let container = createEl('div', ['container'], '');

  let title = createEl('h1', ['title', 'glitch'], 'Virtual Keyboard');
  let textarea = createEl('textarea', ['textarea'], '');
  let keyboard = createEl('div', ['keyboard'], '');

  addHtml(WRAPPER, container);
  addHtml(container, title);
  addHtml(container, textarea);
  addHtml(container, keyboard);

  const DATA = data.en;
  console.log(DATA)

  for (let i in DATA) {
    let keyRow = createEl('div', ['keyboard__inner'], '');
    addHtml(keyboard, keyRow);
    let arr = DATA[i];
    for (let i = 0; i < arr.length; i++) {
      let key = createEl('button', arr[i].classes, arr[i].key);
      addHtml(keyRow, key);
    }
  }
};

export default content;