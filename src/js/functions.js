export function createEl(tag, classNames, text) {
  const element = document.createElement(tag);

  if (classNames.length > 0) {
    classNames.forEach(item => {
      element.classList.add(item);
    })
  }
  
  element.innerHTML = text;
  return element;
}

export function addHtml(item, el) {
  item.appendChild(el);
}