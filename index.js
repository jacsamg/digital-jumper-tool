// References
const pitchSizeInput = document.getElementById('pitchSize');
const conectorSizeInput = document.getElementById('conectorSize');
const pinNumberInput = document.getElementById('pinNumber');
const resultTextMm = document.getElementById('resultTextMm');
const resultTextCm = document.getElementById('resultTextCm');

// Methods
function lengthCalculator(pitchSize, conectorSize, pinNumber) {
    const pitchCount = Math.max(0, pinNumber - 1); // Distance = (n - 1) * pitch
    const length = (pitchSize * pitchCount) + (conectorSize * 2);

    return length.toFixed(2); // millimeters with two decimals
}

function updateResult() {
    const pitchSize = parseFloat(pitchSizeInput.value) || 0;
    const conectorSize = parseFloat(conectorSizeInput.value) || 0;
    const pinNumber = Math.max(0, parseInt(pinNumberInput.value, 10) || 0);
    const lengthMm = parseFloat(lengthCalculator(pitchSize, conectorSize, pinNumber));
    resultTextMm.textContent = lengthMm.toFixed(2);
    resultTextCm.textContent = (lengthMm / 10).toFixed(2);
}

// Event listeners
pitchSizeInput.addEventListener('input', updateResult);
conectorSizeInput.addEventListener('input', updateResult);
pinNumberInput.addEventListener('input', updateResult);

// Initial calculation
updateResult();
