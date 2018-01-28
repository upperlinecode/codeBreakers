// Elements
const secretContainer = document.querySelector('#secret')
const playButton = document.querySelector('#playButton')
const riddleBox = document.querySelector('#riddle')
var counter = 0
var daVinci = false

// Functions
function handlePlay() {
    const audio = document.querySelector(`audio`);
    if (!audio) return;
    playButton.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    counter += 1
    if (counter > 2) {
      secretContainer.innerHTML = "<h4 class='gross'>.-..  ---  ---  -.- <br> ..-  -.  -..  .  .-. <br> -.--  ---  ..-  .-. <br> -.-.  ....  .-  ..  .-.  ...</h4>"
    }
}

function checkRiddle() {
  if (riddleBox.value == "chair") {
    secretContainer.innerHTML = "<h4 class='gross'>5-1-2</h4>"
  }
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

// Event Listeners
playButton.addEventListener('click', handlePlay)
playButton.addEventListener('transitionend', removeTransition)
riddleBox.addEventListener('keyup', checkRiddle)

// DaVinci Code
const daCode = "https://raw.githubusercontent.com/upperlinecode/codeBreakers/master/daVinciCodeArray.rb"

// Konami Code
const keyPresses = []
const secretCode = "cryptography";
window.addEventListener('keyup', (e) => {
  keyPresses.push(e.key)
  keyPresses.splice(-secretCode.length - 1, keyPresses.length - secretCode.length)
  if (keyPresses.join("").includes(secretCode)) {
    secretContainer.innerHTML = "<h3 class='gross'>[72, 101, 114, 101, 32, 105, 115, 32, 121, 111, 117, 114, 32, 102, 105, 110, 97, 108, 32, 99, 111, 100, 101, 58, 32, 100, 99, 111, 100, 101]</h3>"
  }
})
