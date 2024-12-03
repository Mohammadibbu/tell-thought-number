// Utility Functions
function showElement(elementId) {
  document.getElementById(elementId).style.display = "block";
}

function hideElement(elementId) {
  document.getElementById(elementId).style.display = "none";
}

function playAudio(audioFile) {
  const audio = new Audio(audioFile);
  audio.play();
}

function vibrate(pattern) {
  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}

// Online/Offline Handlers
function on() {
  vibrate([50, 100, 200]);
  showElement("center");
  showElement("online");
  hideElement("offline");
  setTimeout(() => hideElement("online"), 3000);
}

function of() {
  vibrate([50, 200, 200, 200]);
  Audiohelp.pause();
  hideElement("center");
  showElement("offline");
}

// Variables
const loader = document.getElementById("loader");
const restart = document.getElementById("restart");
const steps = ["step1", "step2", "step3", "step4"];
const clickAudio = "sounds/click.mp3";
const helpAudio = new Audio("sounds/help.mp3");
let currentStep = 0;
let result = 0;

// Start Game
function startGame() {
  vibrate([50]);
  playAudio(clickAudio);
  hideElement("mainpage");
  showElement(steps[currentStep]);
  helpAudio.play();
}

// Restart Game
function resetGame() {
  vibrate([50]);
  playAudio(clickAudio);
  showElement("loader");
  hideElement("ans");
  hideElement("restart");
  setTimeout(() => {
    location.reload();
  }, 1000);
}

// Handle Step Buttons
function handleStepResponse(value) {
  vibrate([50]);
  playAudio(clickAudio);
  helpAudio.pause();
  result += value;

  // Move to the next step or show the result
  if (currentStep < steps.length - 1) {
    hideElement(steps[currentStep]);
    currentStep++;
    showElement(steps[currentStep]);
  } else {
    hideElement(steps[currentStep]);
    showElement("loader");
    setTimeout(showResult, 1500);
  }
}

// Show Result
function showResult() {
  hideElement("loader");
  showElement("restart");

  const resultsMap = {
    0: "FIVE",
    10: "FOUR",
    20: "SIX",
    30: "ZERO",
    40: "ONE",
    50: "TWO",
    60: "TEN",
    70: "THREE",
    80: "NINE",
    90: "SEVEN",
    100: "EIGHT"
  };

  const resultText = resultsMap[result] || "UNKNOWN";
  playAudio(`sounds/${resultText.toLowerCase()}.mp3`);
  document.getElementById("ans").innerHTML = `<h4 class="lineLeft">The Number You Thought of Was<br><br><i class="glow">${resultText}</i></h4>`;
}

// Feedback Confirmation
function feedback() {
  if (confirm("Opening Gmail or Email")) {
    document.getElementById("fb").href = "mailto:mohammmadibbudummyacc235@gmail.com";
    vibrate([50, 100, 50]);
    setTimeout(() => {
      document.getElementById("fb").href = "#";
    }, 2000);
  } else {
    vibrate([100]);
    document.getElementById("fb").href = "#";
  }
}
