import './style.css';
import menuClick from './menu.js';

const content = document.getElementById('content');

export default function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    // header.innerHTML = 'This is the header';

    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    menuButton.innerHTML = 'Menu'
    menuButton.onclick = menuClick;

    const aboutButton = document.createElement('button');
    aboutButton.classList.add('about-button');
    aboutButton.innerHTML = 'About'

    const contactButton = document.createElement('button');
    contactButton.classList.add('contactButton');
    contactButton.innerHTML = 'Contact'

    content.appendChild(header);
    header.appendChild(menuButton);
    header.appendChild(aboutButton);
    header.appendChild(contactButton);
}