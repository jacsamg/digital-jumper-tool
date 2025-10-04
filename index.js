// Get references to the input elements and result text
const pitchSizeInput = document.getElementById('pitchSize');
const conectorSizeInput = document.getElementById('conectorSize');
const pinNumberInput = document.getElementById('pinNumber');
const resultTextInch = document.getElementById('resultTextInch');
const resultTextCm = document.getElementById('resultTextCm');

// Function to calculate and update the result
function updateResult() {
    const pitchSize = parseFloat(pitchSizeInput.value) || 0;
    const conectorSize = parseFloat(conectorSizeInput.value) || 0;
    const pinNumber = parseFloat(pinNumberInput.value) || 0;
    const lengthInch = ((pitchSize * pinNumber) + (conectorSize * 2));
    const lengthCm = (lengthInch * 2.54).toFixed(2);
    const lengthInchFixed = lengthInch.toFixed(2);
    resultTextInch.textContent = `${lengthInchFixed} inch`;
    resultTextCm.textContent = `${lengthCm} cm`;
}

// Add event listeners to update on input change
pitchSizeInput.addEventListener('input', updateResult);
conectorSizeInput.addEventListener('input', updateResult);
pinNumberInput.addEventListener('input', updateResult);

// Initial calculation
updateResult();
