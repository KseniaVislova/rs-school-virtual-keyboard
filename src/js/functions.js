export function createEl(tag, classNames, text = '', shiftText = '', data = '') {
  const element = document.createElement(tag);

  if (classNames.length > 0) {
    classNames.forEach(item => {
      element.classList.add(item);
    })
  }

  if (data.length > 0) {
    element.setAttribute('data-key', data);
  }
  
  if (text.length > 0) {
    element.innerHTML = `<span class='main'>${text}</span><span class='second'>${shiftText}</span>`;
  } else {
    element.innerHTML = text;
  }
  return element;
}

export function addHtml(item, el) {
  item.appendChild(el);
}