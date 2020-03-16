function menuMobile() {
  let burger = document.getElementById('menuMobile'),
    nav = document.getElementById('navigation'),
    logo = document.getElementById('logo')

  setTimeout(() => {
    nav.classList.toggle('nav-toggle_open')
  }, 300)

  burger.classList.toggle('menu-toggle_open')
  logo.classList.toggle('logo-toggle_open')
  nav.classList.toggle('menu_hide')
  nav.classList.toggle('menu_show')
}
