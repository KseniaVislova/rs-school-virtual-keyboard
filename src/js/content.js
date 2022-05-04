import data from "./data";
import { createEl , addHtml } from "./functions";

const WRAPPER = document.querySelector('.wrapper');

const content = () => {
  let title = createEl(data.title.tag, data.title.className, data.title.text)
  addHtml(WRAPPER, title);
};

export default content;

//  document.body.appendChild(component());