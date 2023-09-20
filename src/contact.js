import displayBody from "./index.js";

export default function contactClick() {
    const contact = document.createElement('div');
    contact.innerHTML = 
    `<div>Contact Page<div>`;
    displayBody.appendChild(contact);

    while(displayBody.hasChildNodes()) {
        displayBody.removeChild(displayBody.firstChild)
    };
    displayBody.appendChild(contact);
}