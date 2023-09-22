import menuClick from './menu.js';
import aboutClick from './about.js';
import contactClick from './contact.js';
import homeClick from './home.js';
import './style.css';

const content = document.getElementById('content');

export default function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);

    const headerTitle = document.createElement('div');
    headerTitle.innerHTML = 'K-Pocha';
    headerTitle.classList.add('headerTitle');
    header.appendChild(headerTitle);

    const headerButtons = document.createElement('div');
    headerButtons.classList.add('headerButtons');
    header.appendChild(headerButtons);

    const homeButton = document.createElement('button');
    homeButton.classList.add('button');
    homeButton.innerHTML = 'Home'
    homeButton.onclick = homeClick;
    headerButtons.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.classList.add('button');
    menuButton.innerHTML = 'Menu'
    menuButton.onclick = menuClick;
    headerButtons.appendChild(menuButton);

    const aboutButton = document.createElement('button');
    aboutButton.classList.add('button');
    aboutButton.innerHTML = 'About'
    aboutButton.onclick = aboutClick;
    headerButtons.appendChild(aboutButton);

    const contactButton = document.createElement('button');
    contactButton.classList.add('button');
    contactButton.innerHTML = 'Contact'
    contactButton.onclick = contactClick;
    headerButtons.appendChild(contactButton);
}
