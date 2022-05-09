const listenEvent = (uppercase) => {
  const KEYS = document.querySelectorAll('.key');
  const textarea = document.querySelector('.textarea');
  let text = textarea.textContent;
  let cursor = textarea.selectionStart;
  let shift = false;

  //Нажатие кнопки

  document.addEventListener('keydown', (event) => {

    KEYS.forEach(item => {
      if (item.getAttribute('data-key') === event.code) {
        item.classList.add('active');
      }

      if(!item.classList.contains('key-special') && item.getAttribute('data-key') === event.code) { 
        console.log(shift, uppercase)
        if(shift && uppercase) {
          cursor = textarea.selectionStart;
          event.preventDefault();
          text += item.children[1].textContent.toLocaleLowerCase();
          console.log(text)
          textarea.textContent = text;
          textarea.selectionStart = cursor + 1;
         } else if (shift) {
          cursor = textarea.selectionStart;
          event.preventDefault();
          text += item.children[1].textContent;
          textarea.textContent = text;
          textarea.selectionStart = cursor + 1;
        } else {
          cursor = textarea.selectionStart;
          event.preventDefault();
          text += item.children[0].textContent;
          textarea.textContent = text;
          textarea.selectionStart = cursor + 1;
        }
      }

      if(item.getAttribute('data-key') === event.code && item.classList.contains('capslock')) {
        textarea.focus();
        uppercase = !uppercase;
        console.log(uppercase && shift)
        if (uppercase) {
          item.classList.add('active');
          KEYS.forEach(item => {
            if(!item.classList.contains('key-special')) {
              let text = item.children[0].textContent.toUpperCase();
              item.children[0].textContent = text;
            }
          })
        } else {
          console.log(item)
          item.classList.remove('active')
          console.log(item)
          KEYS.forEach(item => {
            if(!item.classList.contains('key-special')) {
              let text = item.children[0].textContent.toLowerCase();
              item.children[0].textContent = text;
            }
          })
        }
      }

      if(item.getAttribute('data-key') === event.code && (item.classList.contains('shift-1') || item.classList.contains('shift-2'))) {
        textarea.focus();
        item.classList.add('active');
        shift = true;

        KEYS.forEach(item => {
          if(!item.classList.contains('key-special')) {

            if(item.children[0].classList.contains('main')) {
              item.children[0].classList.remove('main');
              item.children[1].classList.remove('second');
              item.children[0].classList.add('second');
              item.children[1].classList.add('main');
            } 
          }
        })

        if (uppercase === true && shift === true) {
          item.classList.add('active');
          KEYS.forEach(item => {
            if(!item.classList.contains('key-special')) {
              let text = item.children[1].textContent.toLowerCase();
              item.children[1].textContent = text;
            }
          })
        }
      }
    })
  })

  //Отпускаем кнопку

  document.addEventListener('keyup', (event) => {
    KEYS.forEach(item => {
      if (item.getAttribute('data-key') === event.code && !item.classList.contains('capslock')) {
        item.classList.remove('active');
      }

      if(item.getAttribute('data-key') === event.code && (item.classList.contains('shift-1' || item.classList.contains('shift-2')))) {
        textarea.focus();
        item.classList.remove('active');
        shift = false;

        KEYS.forEach(item => {
          if(!item.classList.contains('key-special')) {
            //console.log(item)
            if(item.children[1].classList.contains('main')) {
              item.children[1].classList.remove('main');
              item.children[0].classList.remove('second');
              item.children[1].classList.add('second');
              item.children[0].classList.add('main');
            } 
          }
        })
      }
    })
  })

  //Действие по клику

  KEYS.forEach(item => {
    item.addEventListener('click', () => {
      if(!item.classList.contains('key-special')) {
        textarea.focus();
        console.log(shift, uppercase)
        if (shift === true && uppercase === true) {
          cursor = textarea.selectionStart;
          text += item.children[1].textContent.toLocaleLowerCase();
          textarea.textContent = text;
          textarea.selectionStart = cursor + 1;
        } else if(shift) {
          cursor = textarea.selectionStart;
          text += item.children[1].textContent;
          textarea.textContent = text;
          textarea.selectionStart = cursor + 1;
        } else {
          cursor = textarea.selectionStart;
          text += item.children[0].textContent;
          textarea.textContent = text;
          textarea.selectionStart = cursor + 1;
        }
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

      if(item.classList.contains('shift-1') || item.classList.contains('shift-2')) {
        textarea.focus();

        KEYS.forEach(item => {
          if(!item.classList.contains('key-special')) {

            if(item.children[0].classList.contains('main')) {
              item.children[0].classList.remove('main');
              item.children[1].classList.remove('second');
              item.children[0].classList.add('second');
              item.children[1].classList.add('main');

              setTimeout(function() {
                item.children[1].classList.remove('main');
                item.children[0].classList.remove('second');
                item.children[1].classList.add('second');
                item.children[0].classList.add('main');
              }, 500)
            } 
          }
        })
      }

      if(item.classList.contains('capslock')) {
        textarea.focus();
        uppercase = !uppercase;
        console.log(uppercase)
        if (uppercase) {
          item.classList.add('active')
          KEYS.forEach(item => {
            if(!item.classList.contains('key-special')) {
              let text = item.children[0].textContent.toUpperCase();
              item.children[0].textContent = text;
            }
          })
        } else {
          KEYS.forEach(item => {
            item.classList.remove('active')
            if(!item.classList.contains('key-special')) {
              let text = item.children[0].textContent.toLowerCase();
              item.children[0].textContent = text;
            }
          })
        }
      }
    })
  })

}

export default listenEvent;