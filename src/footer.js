import './style.css'; 

const content = document.getElementById('content');

export default function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    content.appendChild(footer);

    const footerInfo = document.createElement('div');
    footerInfo.classList.add('footer-info');
    footer.appendChild(footerInfo);

    const address = document.createElement('div');
    address.classList.add('address');
    address.innerHTML = '1234 Fake Address Place, Wonderland CA, 99999'
    footerInfo.appendChild(address);

    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.innerHTML = 'Mon-Fri: 4PM-1AM Sat-Sun: 4PM-3AM'
    footerInfo.appendChild(hours);
}