import displayBody from "./index.js";

export default function aboutClick() {
    const about = document.createElement('div');
    about.innerHTML = 
    `<div>About Page<div>`;
    displayBody.appendChild(about);

    while(displayBody.hasChildNodes()) {
        displayBody.removeChild(displayBody.firstChild)
    };
    displayBody.appendChild(about);
}