import displayBody from "./index.js";
import './style.css'; 

export default function homeClick() {
    const home = document.createElement('div');
    home.innerHTML = 
    `<div class='title'>Welcome to K-Pocha<div>
     <div class='para'>Our mission is to provide our customers with the absolute best korean bar experience that money can buy.<div>`;
     home.classList.add('home');
    displayBody.appendChild(home);

    displayBody.replaceChildren(home);
}