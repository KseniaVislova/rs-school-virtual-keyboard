const listenEvent = () => {
  const KEYS = document.querySelectorAll('.key');
  const textarea = document.querySelector('.textarea');
  let text = textarea.textContent;
  let cursor = textarea.selectionStart;
  let uppercase = false;

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
      if(item.classList.contains('backspace')) {
        textarea.focus();
        cursor = textarea.selectionStart;
        text = text.slice(0, -1);
        textarea.textContent = text;
        textarea.selectionStart = cursor - 1;
      }
      if(item.classList.contains('space')) {
        textarea.focus();
        cursor = textarea.selectionStart;
        text += ' ';
        textarea.textContent = text;
        textarea.selectionStart = cursor + 1;
      }
      if(item.classList.contains('capslock')) {
        textarea.focus();
        uppercase = !uppercase;
        console.log(uppercase)
        if (uppercase) {
          item.classList.add('active')
          KEYS.forEach(item => {
            if(!item.classList.contains('key-special')) {
              let text = item.textContent.toUpperCase();
              item.textContent = text;
            }
          })
        } else {
          KEYS.forEach(item => {
            item.classList.remove('active')
            if(!item.classList.contains('key-special')) {
              let text = item.textContent.toLowerCase();
              item.textContent = text;
            }
          })
        }
      }
    })
  })

}

export default listenEvent;