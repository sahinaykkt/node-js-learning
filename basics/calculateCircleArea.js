const calculateCircleArea = (radius) => Math.PI * (radius * radius);

const radiusFromConsole = process.argv[2];

if (!radiusFromConsole || isNaN(radiusFromConsole)) {
    console.log('Please enter a valid number.');
} else {
    console.log(`The circle area is: ${calculateCircleArea(radiusFromConsole).toFixed(2)}`);
}