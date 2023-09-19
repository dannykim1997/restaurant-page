const content = document.getElementById('content');

export default function createHeader() {
    const header = document.createElement('div');
    header.classList.add = 'header';
    header.innerHTML = 'This is the header'

    content.appendChild(header);
}

