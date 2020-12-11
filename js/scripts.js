console.log('Welcome to my Bixacora!')

function menuToggle() {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

function goBack() {
  window.history.back()
}
