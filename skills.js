const readline = require('readline');

// Convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
    if (typeof celsius !== 'number' || isNaN(celsius)) {
        throw new Error('Input must be a number');
    }
    return (celsius * 9/5) + 32;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Enter Celsius value (press Ctrl+K to exit):');

rl.on('line', (input) => {
    try {
        const celsius = parseFloat(input);
        const fahrenheit = convertCelsiusToFahrenheit(celsius);
        console.log(`${celsius}°C = ${fahrenheit}°F`);
    } catch (error) {
        console.error(error.message);
    }
    console.log('Enter Celsius value (press Ctrl+K to exit):');
});

// Handle Ctrl+K (ASCII code 11)
process.stdin.on('data', (chunk) => {
    if (chunk.length === 1 && chunk[0] === 11) { // 11 is Ctrl+K
        console.log('Exiting...');
        rl.close();
        process.exit(0);
    }
});