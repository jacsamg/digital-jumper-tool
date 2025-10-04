// Get references to the input elements and result text
const pitchSizeInput = document.getElementById('pitchSize');
const conectorSizeInput = document.getElementById('conectorSize');
const pinNumberInput = document.getElementById('pinNumber');
const resultTextInch = document.getElementById('resultTextInch');
const resultTextCm = document.getElementById('resultTextCm');

// Función para convertir decimal a fracción (al 1/16 más cercano)
function decimalToFraction(decimal) {
    const whole = Math.floor(decimal);
    const fraction = decimal - whole;
    const sixteenths = Math.round(fraction * 16);
    if (sixteenths === 0) return `${whole}`;
    if (sixteenths === 16) return `${whole + 1}`;
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const g = gcd(sixteenths, 16);
    const num = sixteenths / g;
    const den = 16 / g;
    return whole > 0 ? `${whole} ${num}/${den}` : `${num}/${den}`;
}

// Función para calcular y actualizar el resultado
function updateResult() {
    const pitchSize = parseFloat(pitchSizeInput.value) || 0;
    const conectorSize = parseFloat(conectorSizeInput.value) || 0;
    const pinNumber = parseFloat(pinNumberInput.value) || 0;
    const lengthInch = ((pitchSize * pinNumber) + (conectorSize * 2));
    const lengthCm = (lengthInch * 2.54).toFixed(2);
    const lengthInchFraction = decimalToFraction(lengthInch);
    resultTextInch.textContent = `${lengthInchFraction} inch`;
    resultTextCm.textContent = `${lengthCm} cm`;
}

// Add event listeners to update on input change
pitchSizeInput.addEventListener('input', updateResult);
conectorSizeInput.addEventListener('input', updateResult);
pinNumberInput.addEventListener('input', updateResult);

// Initial calculation
updateResult();
