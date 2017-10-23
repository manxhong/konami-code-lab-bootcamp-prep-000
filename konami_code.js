const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let html = document.querySelector('html');
  html.addEventListener('keydown', onKeyDownHandler);
}

init();

const alphabet = [65, 66, 67];

// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === alphabet[index]) {
    index++;

    if (index === alphabet.length) {
      alert("Congratulations!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
