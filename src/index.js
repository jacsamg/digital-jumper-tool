// Get references to the input elements and result text
const pitchSizeInput = document.getElementById('pitchSize');
const conectorSizeInput = document.getElementById('conectorSize');
const pinNumberInput = document.getElementById('pinNumber');
const resultText = document.getElementById('resultText');

// Function to calculate and update the result
function updateResult() {
    const pitchSize = parseFloat(pitchSizeInput.value) || 0;
    const conectorSize = parseFloat(conectorSizeInput.value) || 0;
    const pinNumber = parseFloat(pinNumberInput.value) || 0;

    const length = ((pitchSize * pinNumber) + (conectorSize * 2)).toFixed(2);

    resultText.textContent = `${length} inch`;
}

// Add event listeners to update on input change
pitchSizeInput.addEventListener('input', updateResult);
conectorSizeInput.addEventListener('input', updateResult);
pinNumberInput.addEventListener('input', updateResult);

// Initial calculation
updateResult();
