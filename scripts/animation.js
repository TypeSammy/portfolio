const toTopBtn = document.querySelector('button')
const circle = document.querySelector('#cursor-circle')

window.onscroll = function () {
  scrollRotate()
  moveXContentDiagonally()
  moveXAcross()
  if (document.documentElement.scrollTop > 900 || document.body.scrollTop > 900) {
    toTopBtn.style.display = "block"
  } else {
    toTopBtn.style.display = "none"
  }
}

const scrollRotate = () => {
  const largeX = document.querySelector('#pattern-lrg')
  const medX = document.querySelector('#pattern-med-reversed')
  largeX.style.transform = "rotate(" + window.pageYOffset / 7 + "deg)"
  medX.style.transform = "rotate(" + window.pageYOffset / 6 + "deg)"
}

const moveXContentDiagonally = () => {
  const medX = document.querySelector('#pattern-med')
  const smlX = document.querySelector('#pattern-sml-reversed')
  medX.style.top = `-${document.documentElement.scrollTop / 7}px`
  medX.style.right = `-${document.documentElement.scrollTop / 7}px`
  smlX.style.top = `-${document.documentElement.scrollTop / 8}px`
  smlX.style.right = `-${document.documentElement.scrollTop / 9}px`
}

const moveXAcross = () => {
  const smlX = document.querySelector('#pattern-sml')
  smlX.style.left = `-${document.documentElement.scrollTop / 2.5}px`
}

toTopBtn.addEventListener('click', function (event) {
  event.preventDefault()
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
})

// const onMouseMove = (event) => {
//   circle.style.left = event.pageX - 16 + 'px'
//   circle.style.top = event.pageY - 16 + 'px'
// }

// document.addEventListener('mousemove', onMouseMove)