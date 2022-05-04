export function createEl(tag, classNames, text) {
  const element = document.createElement(tag);

  classNames.forEach(item => {
    element.classList.add(item);
  })
  
  element.innerHTML = text;
  return element;
}

export function addHtml(item, el) {
  item.appendChild(el);
}