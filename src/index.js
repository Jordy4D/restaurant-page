import homePageLoad from "./home.js";
import menuPageLoad from "./menu.js";
import aboutPageLoad from "./about.js"
import "./style.css";


console.log('Testies')

const content = document.getElementById('content')
const homeBtn = document.getElementById('home')
const aboutBtn = document.getElementById('about')
const menuBtn = document.getElementById('menu')

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
