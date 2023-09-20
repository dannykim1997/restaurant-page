import displayBody from "./index.js";

// const content = document.getElementById('content');

export default function homeClick() {
    const home = document.createElement('div');
    home.innerHTML = 
    `<div>Welcome to BBQ Man<div>
     <div>Our mission is to provide our customers with the most authenthic korean bbq experience that money can buy.
     <div>`;
    displayBody.appendChild(home);

    while(displayBody.hasChildNodes()) {
        displayBody.removeChild(displayBody.firstChild)
    };
    displayBody.appendChild(home);
}

// export function homePage() {
//     const welcome = document.createElement('div');
//     welcome.innerHTML = 
//     `<div>Welcome to BBQ Man<div>
//      <div>Our mission is to provide our customers with the most authenthic korean bbq experience that money can buy.
//      <div>`;
//     displayBody.appendChild(welcome);
// }