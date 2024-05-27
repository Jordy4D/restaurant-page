import Steak from './assets/steakhouse-steak.jpg'

function homePageLoad() {

    const homeBtn = document.getElementById('home')
    const menuBtn = document.getElementById('menu')
    const contactBtn = document.getElementById('contact')

    homeBtn.classList.add("current")
    menuBtn.classList.remove("current")
    contactBtn.classList.remove("current")


    const content = document.getElementById('content')
    const container = document.createElement('div')
    container.classList.add('homeContainer')

    const header = document.createElement('h1')
    const subheader = document.createElement('h2')
    const image = new Image()
    const text = document.createElement('p')
    
    header.textContent = "Chicago Steak & Late";
    subheader.textContent = "on State & Lake";
    text.textContent = `Welcome to the world's premier late-night steak house located on State & Lake St. in downtown Chicago.`;
    image.src = Steak;

    content.appendChild(container)
    container.appendChild(header)
    container.appendChild(subheader)
    container.appendChild(text)
    container.appendChild(image)

    return content

}

export default homePageLoad;