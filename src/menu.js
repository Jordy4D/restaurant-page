function menuPageLoad() {

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
    appOne.textContent = `Appetizer`;
    appOneSub.textContent = `Appetizer`;
    appTwo.textContent = `Appetizer`;
    appTwoSub.textContent = `Appetizer`;
    appThree.textContent = `Appetizer`;
    appThreeSub.textContent = `Appetizer`;
    appFour.textContent = `Appetizer`;
    appFourSub.textContent = `Appetizer`;
    
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
    entOne.textContent = `Entree`;
    entOneSub.textContent = `Entree`;
    entTwo.textContent = `Entree`;
    entTwoSub.textContent = `Entree`;
    entThree.textContent = `Entree`;
    entThreeSub.textContent = `Entree`;
    entFour.textContent = `Entree`;
    entFourSub.textContent = `Entree`;

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
    desOne.textContent = `Desert`;
    desOneSub.textContent = `Desert`;
    desTwo.textContent = `Desert`;
    desTwoSub.textContent = `Desert`;
    desThree.textContent = `Desert`;
    desThreeSub.textContent = `Desert`;
    desFour.textContent = `Desert`;
    desFourSub.textContent = `Desert`;


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