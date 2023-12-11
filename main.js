const hamburger = document.querySelector('#hamburger')
const navbar = document.querySelector('#navbar')
const links = document.querySelectorAll('.link')

links.forEach(link => {
    link.onclick = () => {
        links.forEach(l => {
            l.classList.remove('active-link')
        })
        link.classList.add('active-link')
    }
})

hamburger.onclick = () => {
    hamburger.classList.toggle('active')
    navbar.classList.toggle('nav-active')
}