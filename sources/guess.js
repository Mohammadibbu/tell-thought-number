// Helper functions for vibration and audio
function playVibration(pattern) {
  navigator.vibrate(pattern);
}
function playAudio(src) {
  const audio = new Audio(src);
  audio.play();
}

// Online/Offline handlers
function handleOnline() {
  toggleVisibility("center", true);
  toggleVisibility("online", true);
  toggleVisibility("offline", false);
  playVibration([50, 100, 200]);
  setTimeout(() => toggleVisibility("online", false), 3000);
}
function handleOffline() {
  playVibration([50, 200, 200, 200]);
  toggleVisibility("center", false);
  toggleVisibility("offline", true);
  Audiohelp.pause();
}

// Utility function to toggle element visibility
function toggleVisibility(id, show) {
  document.getElementById(id).style.display = show ? "block" : "none";
}

// Initialize variables
const loader = document.getElementById("loader");
const restart = document.getElementById("restart");

const stepone = document.getElementById("step1");
const steptwo = document.getElementById("step2");
const stepthree = document.getElementById("step3");
const stepfour = document.getElementById("step4");

let stp1y = Number(document.getElementById("step1y").value);
let stp1n = Number(document.getElementById("step1n").value);
let stp2y = Number(document.getElementById("step2y").value);
let stp2n = Number(document.getElementById("step2n").value);
let stp3y = Number(document.getElementById("step3y").value);
let stp3n = Number(document.getElementById("step3n").value);
let stp4y = Number(document.getElementById("step4y").value);
let stp4n = Number(document.getElementById("step4n").value);

const clickSound = "sounds/click.mp3";
const helpAudio = new Audio("sounds/help.mp3");

// Step navigation functions
function start() {
  playVibration([50]);
  playAudio(clickSound);
  toggleVisibility("step1", true);
  toggleVisibility("mainpage", false);
  helpAudio.play();
}
function reset() {
  playVibration([50]);
  playAudio(clickSound);
  toggleVisibility("loader", true);
  toggleVisibility("ans", false);
  toggleVisibility("restart", false);
  setTimeout(() => {
    toggleVisibility("loader", false);
    location.reload();
  }, 1000);
}

// Step handlers
function handleStep(stepNum, value) {
  playVibration([50]);
  playAudio(clickSound);
  helpAudio.pause();

  switch (stepNum) {
    case 1:
      yc1 = value;
      toggleVisibility("step2", true);
      toggleVisibility("step1", false);
      break;
    case 2:
      yc2 = value;
      toggleVisibility("step3", true);
      toggleVisibility("step2", false);
      break;
    case 3:
      yc3 = value;
      toggleVisibility("step4", true);
      toggleVisibility("step3", false);
      break;
    case 4:
      yc4 = value;
      toggleVisibility("step4", false);
      toggleVisibility("loader", true);
      setTimeout(evaluateAnswer, 1500);
      break;
  }
}

// Answer evaluation
function evaluateAnswer() {
  toggleVisibility("loader", false);
  toggleVisibility("restart", true);

  const result = yc1 + yc2 + yc3 + yc4;
  const answers = {
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
    100: "EIGHT",
  };

  const soundMap = {
    FIVE: "sounds/five.mp3",
    FOUR: "sounds/four.mp3",
    SIX: "sounds/six.mp3",
    ZERO: "sounds/zero.mp3",
    ONE: "sounds/one.mp3",
    TWO: "sounds/two.mp3",
    TEN: "sounds/ten.mp3",
    THREE: "sounds/three.mp3",
    NINE: "sounds/nine.mp3",
    SEVEN: "sounds/seven.mp3",
    EIGHT: "sounds/eight.mp3",
  };

  const answer = answers[result] || "UNKNOWN";
  playAudio(soundMap[answer] || "");
  document.getElementById("ans").innerHTML = `
    <h4 class="lineLeft">The Number You Thought of Was<br><br><i class="glow">${answer}</i></h4>
  `;
}

// Feedback confirmation
function feedback() {
  if (confirm("Opening Gmail or Email")) {
    document.getElementById("fb").href = "mailto:mohammmadibbudummyacc235@gmail.com";
    playVibration([50, 100, 50]);
    setTimeout(() => (document.getElementById("fb").href = "#"), 2000);
  } else {
    playVibration([100]);
    document.getElementById("fb").href = "#";
  }
}
