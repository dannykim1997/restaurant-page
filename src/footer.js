const content = document.getElementById('content');

export default function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const address = document.createElement('div');
    address.classList.add('address');
    address.innerHTML = 'Address'

    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.innerHTML = 'Hours'

    content.appendChild(footer);
    footer.appendChild(address);
    footer.appendChild(hours);
}