import './styles/style.css';
import "./styles/main.scss";
import generateContent from "./js/content";
import listenEvent from "./js/keys";

generateContent();
listenEvent(true);
