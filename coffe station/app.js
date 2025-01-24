// set up date
const date = (document.getElementById('date').innerHTML =
    new Date().getfullyear())

//set up nav 
const navBtn = document.getElementById('nav-btn')
const navabar = document.getElementById('navbar')
const navClose = document.getElementById('nav-close')

// show nav
navBtn.addEventListener('click', () => {
    navabar.classList.add('showNav')
})
//close nav
navClose.addEventListener('click', () => {
    navabar.classList.remove('showNav')
})