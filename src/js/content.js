import data from "./data";
import { createEl , addHtml} from "./functions";
import listenEvent from "./keys";

const BODY = document.body;
let lang = 'en';
let DATA = data.en;

const createKeys = (keyboard, DATA) => {
  keyboard.innerHTML = '';
  for (let i in DATA) {
    let keyRow = createEl('div', ['keyboard__inner']);
    addHtml(keyboard, keyRow);
    let arr = DATA[i];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].data !== undefined) {
        let key = createEl('button', arr[i].classes, arr[i].key, arr[i].data);
        addHtml(keyRow, key);
      } else {
        let key = createEl('button', arr[i].classes, arr[i].key);
        addHtml(keyRow, key);
      }
    }
  }
}

const codes = ["ShiftLeft", "AltLeft"];
let pressed = new Set();

document.addEventListener('keydown', (event) => {
  pressed.add(event.code);

  for (let code of codes) {
    if (!pressed.has(code)) {
      return;
    }
  }

  if (lang === 'en') {
    lang = 'ru';
    DATA = data.ru;
  } else {
    lang = 'en';
    DATA = data.en;
  }

  console.log('Изменение lang: ', lang)

  let keyboard = document.querySelector('.keyboard');
  createKeys(keyboard, DATA);
  listenEvent();
})

document.addEventListener('keyup', function(event) {
  pressed.delete(event.code);
});

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}

window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    if (lang === 'en') {
      DATA = data.en;
    } else {
      DATA = data.ru;
    }
  } 
  let keyboard = document.querySelector('.keyboard');
  createKeys(keyboard, DATA);
}

const generateContent = () => {
  let wrapper = createEl('div', ['wrapper']);
  let container = createEl('div', ['container']);
  let title = createEl('h1', ['title', 'glitch'], 'Virtual Keyboard');
  let textarea = createEl('textarea', ['textarea']);
  let keyboard = createEl('div', ['keyboard']);

  addHtml(BODY, wrapper);
  addHtml(wrapper, container);
  addHtml(container, title);
  addHtml(container, textarea);
  addHtml(container, keyboard);

  getLocalStorage();

  let warning = createEl('div', ['warning']);
  let warningText = createEl('p', ['warning__text'], 'Клавиатура создана на операционной системе Windows. Для переключения языка используйте комбинация: SHIFT + ALT(левые).');

  addHtml(container, warning);
  addHtml(warning, warningText);
};

export default generateContent;