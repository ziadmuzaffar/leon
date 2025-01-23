let navbarCollapse = document.querySelector('.navbar-collapse')
let navLink = document.querySelectorAll('.navbar .navbar-nav .nav-item .nav-link')

navLink.forEach(link => {
    link.addEventListener('click', function () {
        navbarCollapse.classList.remove('show')
    })
})