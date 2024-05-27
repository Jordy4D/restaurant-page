import homePageLoad from "./home.js";
import menuPageLoad from "./menu.js";
import contactPageLoad from "./contact.js"
import "./style.css";


const content = document.getElementById('content')
const homeBtn = document.getElementById('home')
const menuBtn = document.getElementById('menu')
const contactBtn = document.getElementById('contact')

homeBtn.classList.add('navHome')
menuBtn.classList.add('navMenu')
contactBtn.classList.add('navContact')


homeBtn.addEventListener('click', function() {
    content.innerHTML = '';
    homePageLoad();
})

menuBtn.addEventListener('click', function() {
    content.innerHTML = '';
    menuPageLoad();
})

contactBtn.addEventListener('click', function() {
    content.innerHTML = '';
    contactPageLoad();
})

homePageLoad();
