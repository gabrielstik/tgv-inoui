const controls = document.querySelector('.controls')
if (controls) {
  const train = document.querySelector('.train')
  const viewX = document.querySelector('.view-x')
  const viewY = document.querySelector('.view-y')
  const viewZ = document.querySelector('.view-z')
  const zoom = document.querySelector('.zoom')

  viewX.addEventListener('change', () => {
    train.style.transform = 'rotateX(' + viewX.value + 'deg)'
  })

  viewY.addEventListener('change', () => {
    train.style.transform = 'rotateY(' + viewY.value + 'deg)'
  })

  viewZ.addEventListener('change', () => {
    train.style.transform = 'rotateZ(' + viewZ.value + 'deg)'
  })

  zoom.addEventListener('change', () => {
    train.style.transform = 'scale(' + zoom.value + ')'
  })
}