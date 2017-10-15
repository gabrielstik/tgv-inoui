const launch = document.querySelector('.launch button')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const background = document.querySelector('.background')
const train = document.querySelector('.dynamic-elements')

launch.addEventListener('click', () => {
  header.classList.toggle('disable')
  footer.classList.toggle('disable')
  launch.classList.toggle('disable')
  background.classList.toggle('enable')
  train.classList.toggle('animation')
})