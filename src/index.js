import homeClick from './home.js';
import createHeader from './header.js';
import createFooter from './footer.js';
import './style.css'; 

const content = document.getElementById('content');

const displayBody = document.createElement('div')
displayBody.classList.add('display');
content.appendChild(displayBody);

export default displayBody

homeClick();
createHeader();
createFooter();

console.log('hi');
