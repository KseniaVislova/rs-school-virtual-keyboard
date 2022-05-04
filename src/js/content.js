import data from "./data";
import { createEl , addHtml } from "./functions";

const WRAPPER = document.querySelector('.wrapper');

const content = () => {
  let container = createEl('div', 'container', '');

  let title = createEl(data.title.tag, data.title.className, data.title.text);
  let textarea = createEl('textarea', 'textarea', '')

  addHtml(WRAPPER, container);
  addHtml(container, title);
  addHtml(container, textarea);
};

export default content;