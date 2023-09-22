import displayBody from "./index.js";
import './style.css'; 

export default function contactClick() {
    const contact = document.createElement('div');
    contact.innerHTML = `<div class='title'>Contact Us<div>`;
    contact.classList.add('contact');
    displayBody.appendChild(contact);

    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = 
    `<div>
        <div class='subtitle'>Email:<div>
        <div class='para'>k-pocha@gmail.com<div>
        <div class='subtitle'>Phone:<div>
        <div class='para'>(123) 456 - 7891<div>
     <div>`
    contactInfo.classList.add('contact-info');
    contact.appendChild(contactInfo); 

    displayBody.replaceChildren(contact);
}