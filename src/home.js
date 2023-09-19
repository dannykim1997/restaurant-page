import displayBody from "./index.js";

// const content = document.getElementById('content');

export default function homePage() {
    const welcome = document.createElement('div');
    welcome.innerHTML = 'Welcome';
    displayBody.appendChild(welcome);
}

export function homeClick() {
    console.log('Home was clicked!');
}

