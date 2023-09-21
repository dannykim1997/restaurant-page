import displayBody from "./index.js";
import './style.css'; 

export default function aboutClick() {
    const about = document.createElement('div');
    about.innerHTML = `<div class='title'>About K-Pocha<div>`;
    about.classList.add('about');
    displayBody.appendChild(about);

    const aboutInfo = document.createElement('div');
    aboutInfo.innerHTML = 
    `<div>
        <div class='subtitle'>Location<div>
        <div class='para'>1234 Fake Address Place, <div>
        <div>Wonderland CA, 99999<div>
        <div class='subtitle'>Hours<div>
        <div class='para'>Monday-Friday<div> 
        <div class='para'>10AM-10PM<div>
        <div class='para'>Weekends<div>
        <div class='para'>10AM-12AM<div>
     <div>`
    aboutInfo.classList.add('about-info');
    about.appendChild(aboutInfo);

    displayBody.replaceChildren(about);
}