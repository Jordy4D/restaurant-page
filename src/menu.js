function menuPageLoad() {

    const homeBtn = document.getElementById('home')
    const menuBtn = document.getElementById('menu')
    const contactBtn = document.getElementById('contact')

    homeBtn.classList.remove("current")
    menuBtn.classList.add("current")
    contactBtn.classList.remove("current")

    const content = document.getElementById('content')
    const container = document.createElement('div')
    container.classList.add('menuContainer')

    const header = document.createElement('h1')
    header.textContent = "Our Menu";
    
    //starters
    const appHead = document.createElement('h3')
    const appOne = document.createElement('h4')
    const appTwo = document.createElement('h4')
    const appThree = document.createElement('h4')
    const appFour = document.createElement('h4')
    const appOneSub = document.createElement('p')
    const appTwoSub = document.createElement('p')
    const appThreeSub = document.createElement('p')
    const appFourSub = document.createElement('p')
    
    appHead.textContent = `Starters`;
    appOne.textContent = `Wagyu Filet Sliders`;
    appOneSub.textContent = `Japanese Wagyu | Three $15.99 / Six $29.99`;
    appTwo.textContent = `Chilled Oysters`;
    appTwoSub.textContent = `East Coast & West Coast | Six $23.99 / Twelve $39.99 `;
    appThree.textContent = `American Wagyu Tataki`;
    appThreeSub.textContent = `Black Garlic Ponzu, Crispy Potatoes | $23.99`;
    appFour.textContent = `Crispy Calamari`;
    appFourSub.textContent = `Mediterranean Octopus, Jalapeno Crema | $20.99`;
    
    //entrees
    const entHead = document.createElement('h3')
    const entOne = document.createElement('h4')
    const entTwo = document.createElement('h4')
    const entThree = document.createElement('h4')
    const entFour = document.createElement('h4')
    const entOneSub = document.createElement('p')
    const entTwoSub = document.createElement('p')
    const entThreeSub = document.createElement('p')
    const entFourSub = document.createElement('p')

    entHead.textContent = `Entrees`;
    entOne.textContent = `Bone-In New York Strip`;
    entOneSub.textContent = `American Wagyu | $94.99`;
    entTwo.textContent = `Porterhouse`;
    entTwoSub.textContent = `28-Day Prime Aged | $189.99`;
    entThree.textContent = `Center-Cut Filet`;
    entThreeSub.textContent = `Grass-Fed Beef | $69.99`;
    entFour.textContent = `Whole Roasted Denver Sole`;
    entFourSub.textContent = `Brown Butter, Champagne | $89.99`;

    //deserts
    const desHead = document.createElement('h3')
    const desOne = document.createElement('h4')
    const desTwo = document.createElement('h4')
    const desThree = document.createElement('h4')
    const desFour = document.createElement('h4')
    const desOneSub = document.createElement('p')
    const desTwoSub = document.createElement('p')
    const desThreeSub = document.createElement('p')
    const desFourSub = document.createElement('p')

    desHead.textContent = `Deserts`;
    desOne.textContent = `Steak & Late Cheesecake`;
    desOneSub.textContent = `Cookie Butter, Vanilla Whipped Cream | $13.99`;
    desTwo.textContent = `Crème Brûlée`;
    desTwoSub.textContent = `Coffee or Chocolate | $15.99`;
    desThree.textContent = `Cookies and Cream`;
    desThreeSub.textContent = `Ganache Ripple, Sweet Cream Ice Cream, Magic Chocolate Shell | $12.99`;
    desFour.textContent = `Macaron Platter`;
    desFourSub.textContent = `Blueberry, Cookie Butter, Raspberry, Espresso | $29.99`;


    content.appendChild(container)
    container.appendChild(header)
    //starters
    container.appendChild(appHead)
    container.appendChild(appOne)
    container.appendChild(appOneSub)
    container.appendChild(appTwo)
    container.appendChild(appTwoSub)
    container.appendChild(appThree)
    container.appendChild(appThreeSub)
    container.appendChild(appFour)
    container.appendChild(appFourSub)
   
    // entrees
    container.appendChild(entHead)
    container.appendChild(entOne)
    container.appendChild(entOneSub)
    container.appendChild(entTwo)
    container.appendChild(entTwoSub)
    container.appendChild(entThree)
    container.appendChild(entThreeSub)
    container.appendChild(entFour)
    container.appendChild(entFourSub)

    // deserts
    container.appendChild(desHead)
    container.appendChild(desOne)
    container.appendChild(desOneSub)
    container.appendChild(desTwo)
    container.appendChild(desTwoSub)
    container.appendChild(desThree)
    container.appendChild(desThreeSub)
    container.appendChild(desFour)
    container.appendChild(desFourSub)

    return content

}

export default menuPageLoad;