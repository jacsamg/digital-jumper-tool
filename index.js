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

// Función para parsear fracción o decimal a número
function parseFraction(input) {
    if (input.includes('/')) {
        const parts = input.split(' ');
        let whole = 0;
        let fraction = 0;

        if (parts.length === 2) {
            whole = parseFloat(parts[0]) || 0;
            fraction = eval(parts[1]); // Evalúa "1/4" como 0.25
        } else {
            fraction = eval(parts[0]);
        }

        return whole + fraction;
    }

    return parseFloat(input) || 0;
}

// Función para calcular y actualizar el resultado
function updateResult() {
    const pitchSize = parseFraction(pitchSizeInput.value);
    const conectorSize = parseFraction(conectorSizeInput.value);
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
