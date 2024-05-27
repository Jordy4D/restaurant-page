import Steak from './assets/steakhouse-steak.jpg'

function homePageLoad() {

    const content = document.getElementById('content')
    const container = document.createElement('div')
    container.classList.add('container')

    const homeBtn = document.getElementById('home')
    homeBtn.classList.add('navHome')

    const header = document.createElement('h1')
    const subheader = document.createElement('h2')
    const image = new Image()
    const text = document.createElement('p')
    
    header.textContent = "Chicago Steak & Late";
    subheader.textContent = "on State & Lake";
    image.src = Steak;
    text.textContent = `Welcome to the world's premier late-night steak house located on State & Lake St. in downtown Chicago.`;

    content.appendChild(container)
    container.appendChild(header)
    container.appendChild(subheader)
    container.appendChild(image)
    container.appendChild(text)

    return content

}

export default homePageLoad;