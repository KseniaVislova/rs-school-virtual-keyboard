import { addText } from "./functions";

const listenEvent = (u) => {
  const KEYS = document.querySelectorAll(".key");
  const textarea = document.querySelector(".textarea");
  let text = textarea.value;
  let cursor = textarea.selectionStart;
  let shift = false;
  let uppercase = u;
  const codes = ["ShiftLeft", "AltLeft"];
  let pressed = [];

  //Нажатие кнопки

  document.addEventListener("keydown", (event) => {
    pressed.push(event.code);

    if (pressed.indexOf(codes[0]) === -1) {
      pressed = [];
    }

    if (pressed.indexOf(codes[0]) !== -1 && pressed.indexOf(codes[0]) + 1 === pressed.indexOf(codes[1]) || pressed.length > 2) {
      return;
    }

    if (event.code === "Enter") {
      event.preventDefault();
      textarea.focus();
      addText("\n");
    }

    if (event.code === "Tab") {
      event.preventDefault();
      textarea.focus();
      addText("\t");
    }

    if(event.code === "Space") {
      event.preventDefault();
      textarea.focus();
      addText(" ");
    }

    if (event.code === "Delete") {
      event.preventDefault();
      textarea.focus();
      cursor = textarea.selectionStart;
      if (text.length >= cursor) {
        let part1 = text.slice(0, cursor);
        let part2 = text.slice(cursor + 1);
        text = part1 + part2;
        textarea.value = text;
        textarea.selectionStart = cursor;
        textarea.selectionEnd = cursor;
      }
    }

    KEYS.forEach(item => {
      if (item.getAttribute("data-key") === event.code) {
        item.classList.add("active");
      }

      if(!item.classList.contains("key-special") && item.getAttribute("data-key") === event.code) { 
        event.preventDefault();
        textarea.focus();
        if(shift && uppercase) {
          addText(item.children[1].textContent.toLocaleLowerCase());
         } else if (shift) {
          addText(item.children[1].textContent);
        } else {
          addText(item.children[0].textContent);
        }
      }

      if(item.getAttribute("data-key") === event.code && item.classList.contains("capslock")) {
        textarea.focus();
        uppercase = !uppercase;
        if (uppercase) {
          item.classList.add("active");
          KEYS.forEach(item => {
            if(!item.classList.contains("key-special")) {
              let text = item.children[0].textContent.toUpperCase();
              item.children[0].textContent = text;
            }
          });
        } else {
          item.classList.remove("active");
          KEYS.forEach(item => {
            if(!item.classList.contains("key-special")) {
              let text = item.children[0].textContent.toLowerCase();
              item.children[0].textContent = text;
            }
          });
        }
      }

      if(item.getAttribute("data-key") === event.code && (item.classList.contains("shift-1") || item.classList.contains("shift-2"))) {
        textarea.focus();
        item.classList.add("active");
        shift = true;

        KEYS.forEach(item => {
          if(!item.classList.contains("key-special")) {

            if(item.children[0].classList.contains("main")) {
              item.children[0].classList.remove("main");
              item.children[1].classList.remove("second");
              item.children[0].classList.add("second");
              item.children[1].classList.add("main");
            } 
          }
        });

        if (uppercase === true && shift === true) {
          item.classList.add("active");
          KEYS.forEach(item => {
            if(!item.classList.contains("key-special")) {
              let text = item.children[1].textContent.toLowerCase();
              item.children[1].textContent = text;
            }
          });
        }
        if (uppercase === false && shift === true) {
          item.classList.add("active");
          KEYS.forEach(item => {
            if(!item.classList.contains("key-special")) {
              let text = item.children[1].textContent.toUpperCase();
              item.children[1].textContent = text;
            }
          });
        }
      }
    });
  });

  //Отпускаем кнопку

  document.addEventListener("keyup", (event) => {
    KEYS.forEach(item => {
      if (item.getAttribute("data-key") === event.code && !item.classList.contains("capslock")) {
        item.classList.remove("active");
      }

      if(item.getAttribute("data-key") === event.code && (item.classList.contains("shift-1" || item.classList.contains("shift-2")))) {
        textarea.focus();
        item.classList.remove("active");
        shift = false;

        KEYS.forEach(item => {
          if(!item.classList.contains("key-special")) {
            if(item.children[1].classList.contains("main")) {
              item.children[1].classList.remove("main");
              item.children[0].classList.remove("second");
              item.children[1].classList.add("second");
              item.children[0].classList.add("main");
            } 
          }
        });
      }
    });
  });

  //Действие по клику

  KEYS.forEach(item => {
    item.addEventListener("click", () => {
      if(!item.classList.contains("key-special")) {
        textarea.focus();
        if (shift === true && uppercase === true) {
          addText(item.children[1].textContent.toLocaleLowerCase());
        } else if(shift) {
          addText(item.children[1].textContent);
        } else {
          addText(item.children[0].textContent);
        }
      }

      if(item.classList.contains("space")) {
        textarea.focus();
        addText(" ");
      }

      if(item.classList.contains("shift-1") || item.classList.contains("shift-2")) {
        textarea.focus();

        KEYS.forEach(item => {
          if(!item.classList.contains("key-special")) {
            if(item.children[0].classList.contains("main")) {
              item.children[0].classList.remove("main");
              item.children[1].classList.remove("second");
              item.children[0].classList.add("second");
              item.children[1].classList.add("main");

              setTimeout(function() {
                item.children[1].classList.remove("main");
                item.children[0].classList.remove("second");
                item.children[1].classList.add("second");
                item.children[0].classList.add("main");
              }, 500);
            } 
          }
        });
      }

      if(item.classList.contains("capslock")) {
        textarea.focus();
        uppercase = !uppercase;
        if (uppercase) {
          item.classList.add("active");
          KEYS.forEach(item => {
            if(!item.classList.contains("key-special")) {
              let text = item.children[0].textContent.toUpperCase();
              item.children[0].textContent = text;
            }
          });
        } else {
          KEYS.forEach(item => {
            item.classList.remove("active");
            if(!item.classList.contains("key-special")) {
              let text = item.children[0].textContent.toLowerCase();
              item.children[0].textContent = text;
            }
          });
        }
      }

      if (item.classList.contains("enter")) {
        textarea.focus();
        addText("\n");
      }

      if (item.classList.contains("tab")) {
        textarea.focus();
        addText("\t");
      }

      if (item.classList.contains("del")) {
        textarea.focus();
        cursor = textarea.selectionStart;
        if (text.length >= cursor) {
          let part1 = text.slice(0, cursor);
          let part2 = text.slice(cursor + 1);
          text = part1 + part2;
          textarea.value = text;
          textarea.selectionStart = cursor;
          textarea.selectionEnd = cursor;
        }
      }

      if(item.classList.contains("backspace")) {
        textarea.focus();
        cursor = textarea.selectionStart;
        let part1 = text.slice(0, cursor - 1);
          let part2 = text.slice(cursor);
          text = part1 + part2;
          textarea.value = text;
          textarea.selectionStart = cursor - 1;
          textarea.selectionEnd = cursor - 1;
      }
    });
  });
};

export default listenEvent;