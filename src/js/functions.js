export function createEl(tag, className, text) {
  const element = document.createElement(tag);
  element.classList.add(className);
  if (tag === 'h1') {
    element.classList.add('glitch');
  }
  element.innerHTML = text;
  return element;
}

export function addHtml(item, el) {
  item.appendChild(el);
}