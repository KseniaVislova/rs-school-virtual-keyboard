import data from "./data";
import { createEl , addHtml } from "./functions";

const WRAPPER = document.querySelector('.wrapper');

const content = () => {
  let container = createEl('div', 'container', '')

  let title = createEl(data.title.tag, data.title.className, data.title.text);

  addHtml(WRAPPER, container);
  addHtml(container, title);
};

export default content;