const listenEvent = () => {
  const KEYS = document.querySelectorAll('.key');
  const textarea = document.querySelector('.textarea');
  let text = textarea.textContent;
  let cursor = textarea.selectionStart;

  document.addEventListener('keydown', (event) => {

    KEYS.forEach(item => {
      if (item.getAttribute('data-key') === event.code) {
        item.classList.add('active');
      }
      if(!item.classList.contains('key-special') && item.getAttribute('data-key') === event.code) {
        cursor = textarea.selectionStart;
        event.preventDefault();
        text += item.textContent;
        textarea.textContent = text;
        textarea.selectionStart = cursor + 1;
      }
    })
  })

  document.addEventListener('keyup', (event) => {
    KEYS.forEach(item => {
      if (item.getAttribute('data-key') === event.code) {
        item.classList.remove('active');
      }
    })
  })

  KEYS.forEach(item => {
    item.addEventListener('click', () => {
      if(!item.classList.contains('key-special')) {
        textarea.focus();
        cursor = textarea.selectionStart;
        text += item.textContent;
        textarea.textContent = text;
        textarea.selectionStart = cursor + 1;
      }
    })
  })

}

export default listenEvent;