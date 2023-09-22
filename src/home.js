import displayBody from "./index.js";
import './style.css'; 

export default function homeClick() {
    const home = document.createElement('div');
    home.innerHTML = 
    `<div class='title'>Welcome to K-Pocha<div>
     <div class='para'>Our mission is to provide customers the best korean bar experience that money can buy. We have traditional korean bar foods, as well as modern fusion favorites. With a wide selection of drinks, K-Pocha will be your favorite place to kick back with friends!<div>`;
     home.classList.add('home');
    displayBody.appendChild(home);

    displayBody.replaceChildren(home);
}