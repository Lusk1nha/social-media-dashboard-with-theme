const theme_name = document.querySelector('.theme-name')
const button_theme = document.querySelector('.button--theme')

button_theme.addEventListener('click', changeTheme)

function changeTheme() {
  const body = document.body

  if ( body.classList[0] == 'dark' ) {
    body.classList.remove('dark')
    body.classList.add('light')

    theme_name.innerHTML = 'Light Mode'

  } else {
    body.classList.remove('light')
    body.classList.add('dark')

    theme_name.innerHTML = 'Dark Mode'
  }
}