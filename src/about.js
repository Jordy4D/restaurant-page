function aboutPageLoad() {

    const content = document.getElementById('content')
    const header = document.createElement('h1')
    
    const image = document.createElement('img')
    const text = document.createElement('p')
    
    header.textContent = "About Us";
    image.src = 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/shulas-steakhouse-steak.jpg';
    text.textContent = `Welcome to the world's premier late-night steak house located on State & Lake St. in downtown Chicago.`;


    content.appendChild(header)
    content.appendChild(image)
    content.appendChild(text)

    return content

}

export default aboutPageLoad;