import Map from "./assets/steak-and-late.JPG"

function contactPageLoad() {

    const homeBtn = document.getElementById('home')
    const menuBtn = document.getElementById('menu')
    const contactBtn = document.getElementById('contact')

    homeBtn.classList.remove("current")
    menuBtn.classList.remove("current")
    contactBtn.classList.add("current")

    const content = document.getElementById('content')
    const container = document.createElement('div')
    container.classList.add('contactContainer')

    const header = document.createElement('h1')
    const ops = document.createElement('h4')
    const hours = document.createElement('p')
    const callUs = document.createElement('h4')
    const genInq = document.createElement('p')
    const forRes = document.createElement('h4')
    const resNum = document.createElement('p')
    const emailUs = document.createElement('h4')
    const emailAdr = document.createElement('p')
    const ourAdr = document.createElement('h4')
    const address = document.createElement('p')


    const mapText = document.createElement('h5')
    const image = new Image()
    

    header.textContent = "Contact Us";
    ops.textContent = "Hours of Operation"
    hours.textContent = "Tues - Sun, 4pm to 2am"    
    callUs.textContent = "For General Inquiries"
    genInq.textContent = "312-555-5555"
    forRes.textContent = "For Reservations"
    resNum.textContent = "312-555-5455"
    emailUs.textContent = "Email Us"
    emailAdr.textContent = "contact@chicagosteakandlate.com"
    ourAdr.textContent = "Find Us"
    address.textContent = "199 N State Street, Chicago, IL 60601"
    mapText.textContent = "We're located n the heart of downtown Chicago, just a few blocks south of the river on North State Street"
    image.src = Map;


    content.appendChild(container)
    container.appendChild(header)
    container.appendChild(ops)
    container.appendChild(hours)
    container.appendChild(callUs)
    container.appendChild(genInq)
    container.appendChild(forRes)
    container.appendChild(resNum)
    container.appendChild(emailUs)
    container.appendChild(emailAdr)
    container.appendChild(ourAdr)
    container.appendChild(address)

    container.appendChild(mapText)
    
    container.appendChild(image)

    return content

}

export default contactPageLoad;