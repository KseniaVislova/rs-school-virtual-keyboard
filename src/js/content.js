import data from "./data";
import { createEl , addHtml } from "./functions";

const WRAPPER = document.querySelector('.wrapper');

const content = () => {
  let container = createEl('div', ['container'], '');

  let title = createEl('h1', ['title', 'glitch'], 'Virtual Keyboard');
  let textarea = createEl('textarea', ['textarea'], '');
  let keyboard = createEl('div', ['keyboard'], '');
  let keyRow = createEl('div', ['keyboard__inner'], '');

  addHtml(WRAPPER, container);
  addHtml(container, title);
  addHtml(container, textarea);
  addHtml(container, keyboard);
  addHtml(keyboard, keyRow);

  let keyRow1 = data.en;
  keyRow1 = keyRow1["keys-row-1"];

  console.log(keyRow1)

  for (let i = 0; i < keyRow1.length; i++) {
    let key = createEl('button', keyRow1[i].classes, keyRow1[i].key);

    addHtml(keyRow, key);
  }

};

export default content;