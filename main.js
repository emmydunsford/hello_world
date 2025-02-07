// main.js

// Get all the panel sets and the next button
const panelSets = document.querySelectorAll('.panel-set');
const nextButton = document.getElementById('nextButton');

// Initialize the current set index
let currentSetIndex = 0;

// Function to show the next set of panels
function showNextSet() {
    // Hide the current set
    panelSets[currentSetIndex].classList.remove('active');
    
    // Move to the next set
    currentSetIndex = (currentSetIndex + 1) % panelSets.length;

    // Show the next set
    panelSets[currentSetIndex].classList.add('active');
}

// Event listener for the Next Set button
nextButton.addEventListener('click', showNextSet);
