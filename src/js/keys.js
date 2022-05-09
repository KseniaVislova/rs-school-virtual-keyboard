const listenEvent = (u) => {
  const KEYS = document.querySelectorAll('.key');
  const textarea = document.querySelector('.textarea');
  let text = textarea.value;
  let cursor = textarea.selectionStart;
  let shift = false;
  let uppercase = u;

  //Нажатие кнопки

  document.addEventListener('keydown', (event) => {
    console.log(uppercase)
    console.log(textarea)
    console.log('event.code', event.code)

    if (event.code === 'Enter') {
      event.preventDefault();
      textarea.focus();
      text += `\n`;
      console.log( "VALUE" ,textarea.value)
      textarea.value = text;
    }

    if (event.code === 'Tab') {
      event.preventDefault();
      textarea.focus();
      text += `\t`;
      console.log( "VALUE" ,textarea.value)
      textarea.value = text;
    }

    if(event.code === 'Space') {
      event.preventDefault();
      textarea.focus();
      cursor = textarea.selectionStart;
      text += ' ';
      textarea.value = text;
      textarea.selectionStart = cursor + 1;
    }

    if (event.code === 'Delete') {
      event.preventDefault();
      textarea.focus();
      cursor = textarea.selectionStart;
      console.log( "Cursor" , cursor)
      if (text.length >= cursor) {
        let part1 = text.slice(0, cursor)
        let part2 = text.slice(cursor + 1)
        console.log(part1, part2)
        text = part1 + part2
        textarea.value = text;
        textarea.selectionStart = cursor;
        textarea.selectionEnd = cursor;
        console.log( "Cursor2" , textarea.selectionStart)
      }
    }

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
          console.log("TEXT",text)
          textarea.value = text;
          textarea.selectionStart = cursor + 1;
         } else if (shift) {
          cursor = textarea.selectionStart;
          event.preventDefault();
          text += item.children[1].textContent;;
          textarea.value = text;
          textarea.selectionStart = cursor + 1;
        } else {
          cursor = textarea.selectionStart;
          event.preventDefault();
          text += item.children[0].textContent;
          console.log("TEXT",text)
          textarea.value = text;
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
          textarea.value = text;
          textarea.selectionStart = cursor + 1;
        } else if(shift) {
          cursor = textarea.selectionStart;
          text += item.children[1].textContent;
          textarea.value = text;
          textarea.selectionStart = cursor + 1;
        } else {
          cursor = textarea.selectionStart;
          text += item.children[0].textContent;
          textarea.value = text;
          textarea.selectionStart = cursor + 1;
        }
      }

      if(item.classList.contains('space')) {
        textarea.focus();
        cursor = textarea.selectionStart;
        text += ' ';
        textarea.value = text;
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

      if (item.classList.contains('enter')) {
        textarea.focus();
        text += `\n`;
        console.log( "VALUE" ,textarea.value)
        textarea.value = text;
      }

      if (item.classList.contains('tab')) {
        textarea.focus();
        text += `\t`;
        console.log( "VALUE" ,textarea.value)
        textarea.value = text;
      }

      if (item.classList.contains('del')) {
        textarea.focus();
        cursor = textarea.selectionStart;
        console.log( "Cursor" , cursor)
        if (text.length >= cursor) {
          let part1 = text.slice(0, cursor)
          let part2 = text.slice(cursor + 1)
          console.log(part1, part2)
          text = part1 + part2
          textarea.value = text;
          textarea.selectionStart = cursor;
          textarea.selectionEnd = cursor;
          console.log( "Cursor2" , textarea.selectionStart)
        }
      }

      if(item.classList.contains('backspace')) {
        textarea.focus();
        cursor = textarea.selectionStart;
        let part1 = text.slice(0, cursor - 1)
          let part2 = text.slice(cursor)
          console.log(part1, part2)
          text = part1 + part2
          textarea.value = text;
          textarea.selectionStart = cursor - 1;
          textarea.selectionEnd = cursor - 1;
      }
  
    })
  })

}

export default listenEvent;