const launch = document.querySelector('.launch button')
const equalizer = document.querySelector('.equalizer')
const equalizerBars = document.querySelectorAll('.equalizer [class^="bar-"]')

const header = document.querySelector('header')
const sncfLogo = document.querySelector('footer img')
const background = document.querySelector('.background')
const train = document.querySelector('.dynamic-elements')
const carriers = document.querySelectorAll('div[class^="catenary-carrier-"]')
const moveLeft = document.querySelector('.action-move-left')
const moveRight = document.querySelector('.action-move-right')
const buy = document.querySelector('.buy')

const audio = document.querySelector('audio')
let audioPlaying = true

launch.addEventListener('click', () => {
  header.classList.add('disable')
  sncfLogo.classList.add('hide')
  launch.classList.add('hide')
  background.classList.add('enable')
  carriers.forEach(carrier => {
    carrier.classList.add('actives')
    carrier.classList.add('animation')
  })
  train.classList.add('animation')
  moveLeft.classList.add('hide')
  moveRight.classList.add('hide')
  buy.classList.add('can-buy')
  equalizer.classList.add('enable');
  audio.play();
})

equalizer.addEventListener('click', () => {
  if (audioPlaying == true) {
    audioPlaying = false
    audio.pause()
  }
  else {
    audio.play()
    audioPlaying = true
  }
  equalizerBars.forEach(equalizerBar => {
    equalizerBar.classList.toggle('paused')
  })
})