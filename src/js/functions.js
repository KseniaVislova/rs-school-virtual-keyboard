export const createEl = (tag, classNames, text = '', shiftText = '', data = '') => {
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

export const addHtml = (item, el) => {
  item.appendChild(el);
}

export const addText = (item) => {
  const textarea = document.querySelector('.textarea');
  let text = textarea.value;
  let cursor = textarea.selectionStart;
  let part1 = text.slice(0, cursor)
  let part2 = text.slice(cursor)
  console.log("parts", part1, part2)
  console.log('item', item)

  text = part1 + item + part2;
  console.log('text', text)
  textarea.value = text;
  textarea.selectionStart = cursor + 1;
  textarea.selectionEnd = cursor + 1;
}