export function createEl(tag, classNames, text = '', data = '') {
  const element = document.createElement(tag);

  if (classNames.length > 0) {
    classNames.forEach(item => {
      element.classList.add(item);
    })
  }

  if (data.length > 0) {
    element.setAttribute('data-key', data);
  }
  
  element.innerHTML = text;
  return element;
}

export function addHtml(item, el) {
  item.appendChild(el);
}