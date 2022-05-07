import data from "./data";
import { createEl , addHtml } from "./functions";

const BODY = document.body;

const content = () => {
  let wrapper = createEl('div', ['wrapper'], '');
  let container = createEl('div', ['container'], '');
  let title = createEl('h1', ['title', 'glitch'], 'Virtual Keyboard');
  let textarea = createEl('textarea', ['textarea'], '');
  let keyboard = createEl('div', ['keyboard'], '');

  addHtml(BODY, wrapper);
  addHtml(wrapper, container);
  addHtml(container, title);
  addHtml(container, textarea);
  addHtml(container, keyboard);

  const DATA = data.en;

  for (let i in DATA) {
    let keyRow = createEl('div', ['keyboard__inner'], '');
    addHtml(keyboard, keyRow);
    let arr = DATA[i];
    for (let i = 0; i < arr.length; i++) {
      let key = createEl('button', arr[i].classes, arr[i].key);
      addHtml(keyRow, key);
    }
  }

  let warning = createEl('div', ['warning'], '');
  let warningText = createEl('p', ['warning__text'], 'Клавиатура создана на операционной системе Windows. Для переключения языка используйте комбинация: SHIFT + ALT.');

  addHtml(container, warning);
  addHtml(warning, warningText);
};

export default content;