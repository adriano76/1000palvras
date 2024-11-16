// script.js

let words = [];
let wordIndex = 0;
let intervalId = null;

// Start the speed reading
function startReading() {
  const textInput = document.getElementById("inputText").value;
  const speedInput = document.getElementById("speed").value;
  const display = document.getElementById("display");

  if (!textInput.trim()) {
    alert("Por favor, insira um texto para começar!");
    return;
  }

  words = textInput.trim().split(/\s+/); // Split text into words
  wordIndex = 0;

  const intervalTime = 60000 / speedInput; // Calculate interval in ms
  display.innerHTML = ""; // Clear display
  clearInterval(intervalId); // Clear any previous intervals

  intervalId = setInterval(() => {
    if (wordIndex < words.length) {
      display.innerHTML = words[wordIndex];
      wordIndex++;
    } else {
      stopReading();
    }
  }, intervalTime);
}

// Stop the speed reading
function stopReading() {
  clearInterval(intervalId);
  const display = document.getElementById("display");
  display.innerHTML = "Leitura parada.";
}

// Event listeners for buttons
document.getElementById("startButton").addEventListener("click", startReading);
document.getElementById("stopButton").addEventListener("click", stopReading);
