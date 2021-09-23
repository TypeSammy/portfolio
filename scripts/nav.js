const NavigationLinks = document.querySelectorAll('.links')

NavigationLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault()
    const clickedLink = event.target.innerText
    clickedLink === 'WORKS' ? scrollToPortfolio() : null
    clickedLink === 'DOODLES' ? scrollToIllustrations() : null
    clickedLink === 'CONTACT' ? scrollToContact() : null
  })
})

const scrollToPortfolio = () => {
  return document.querySelector('#my-works').scrollIntoView({ behavior: "smooth" })
}

const scrollToIllustrations = () => {
  return document.querySelector('#doodles').scrollIntoView({ behavior: "smooth" })
}

const scrollToContact = () => {
  return document.querySelector('#contact').scrollIntoView({ behavior: "smooth" })
}
