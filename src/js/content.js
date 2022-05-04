import data from "./data";
import { createEl , addHtml } from "./functions";

const WRAPPER = document.querySelector('.wrapper');

const content = () => {
  let container = createEl('div', 'container', '');

  let title = createEl('h1', 'title', 'Virtual Keyboard');
  let textarea = createEl('textarea', 'textarea', '')

  addHtml(WRAPPER, container);
  addHtml(container, title);
  addHtml(container, textarea);
};

export default content;