import displayBody from "./index.js";

export default function menuClick() {
    const menu = document.createElement('div');
    menu.innerHTML = 
    `<div>Here is the menu<div>
     <div>Menuuuuuuuuuuuu
     <div>`;

    while(displayBody.hasChildNodes()) {
        displayBody.removeChild(displayBody.firstChild)
    };
    displayBody.appendChild(menu);
}