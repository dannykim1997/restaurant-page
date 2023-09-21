import menuClick from './menu.js';
import aboutClick from './about.js';
import contactClick from './contact.js';
import homeClick from './home.js';
import './style.css';

const content = document.getElementById('content');

export default function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const headerTitle = document.createElement('div');
    headerTitle.innerHTML = 'K-Pocha';
    headerTitle.classList.add('headerTitle');
    header.appendChild(headerTitle);

    const homeButton = document.createElement('button');
    homeButton.classList.add('home-button');
    homeButton.innerHTML = 'Home'
    homeButton.onclick = homeClick;

    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    menuButton.innerHTML = 'Menu'
    menuButton.onclick = menuClick;

    const aboutButton = document.createElement('button');
    aboutButton.classList.add('about-button');
    aboutButton.innerHTML = 'About'
    aboutButton.onclick = aboutClick;

    const contactButton = document.createElement('button');
    contactButton.classList.add('contactButton');
    contactButton.innerHTML = 'Contact'
    contactButton.onclick = contactClick;

    content.appendChild(header);
    header.appendChild(homeButton);
    header.appendChild(menuButton);
    header.appendChild(aboutButton);
    header.appendChild(contactButton);
}
