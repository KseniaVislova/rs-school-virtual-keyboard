import './assets/styles/style.css';
import "./assets/styles/main.scss";

function component() {
  const element = document.createElement('div');

  element.innerHTML = "Hello!"
  element.classList.add('hello');

  return element;
 }

 document.body.appendChild(component());