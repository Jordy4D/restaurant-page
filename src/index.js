import homePageLoad from "./home.js";
import menuPageLoad from "./menu.js";
import aboutPageLoad from "./about.js"
import "./style.css";


const content = document.getElementById('content')
const homeBtn = document.getElementById('home')
const menuBtn = document.getElementById('menu')
const aboutBtn = document.getElementById('about')

homeBtn.classList.add('navHome')
menuBtn.classList.add('navMenu')
aboutBtn.classList.add('navAbout')


homeBtn.addEventListener('click', function() {
    content.innerHTML = '';
    homePageLoad();
})

menuBtn.addEventListener('click', function() {
    content.innerHTML = '';
    menuPageLoad();
})

aboutBtn.addEventListener('click', function() {
    content.innerHTML = '';
    aboutPageLoad();
})

homePageLoad();
