import Map from "./assets/steak-and-late.JPG"

function contactPageLoad() {

    const content = document.getElementById('content')
    const container = document.createElement('div')
    container.classList.add('container')

    const header = document.createElement('h1')
    const image = new Image()
    const text = document.createElement('p')
    
    header.textContent = "Contact Us";
    image.src = Map;
    text.textContent = `Welcome to the world's premier late-night steak house located on State & Lake St. in downtown Chicago.`;


    content.appendChild(container)
    container.appendChild(header)
    container.appendChild(image)
    container.appendChild(text)

    return content

}

export default contactPageLoad;