function getFooter() {

    const thisYear = new Date()

    const footer = document.getElementById('footer')
    const copyright = document.createElement('p')
    copyright.textContent = `\u00A9 ${thisYear.getFullYear()} Chicago Steak & Late`;
    footer.appendChild(copyright)
    

    return footer;
}

export default getFooter;