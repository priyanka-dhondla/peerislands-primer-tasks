// Task1: Temperature Converter Program a. Take input from the user for the temperature value and the scale (Celsius or Fahrenheit). b. Based on the user's input, determine whether to convert from Celsius to Fahrenheit or from Fahrenheit to Celsius. c. Use arrow functions to perform the conversion. (Create two separate arrow functions: one for converting Celsius to Fahrenheit, and another for converting Fahrenheit to Celsius. Pass the temperature value to the appropriate function from your main function and return the converted value.) d. Display the converted temperature value to the user.


const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;


const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;


const temperatureConverter = () => {
    const temperature = parseFloat(prompt("Enter the temperature value:"));
    const scale = prompt("Enter the scale (C for Celsius, F for Fahrenheit):").toUpperCase();

    let convertedTemperature;

    if (scale === 'C') {
        convertedTemperature = celsiusToFahrenheit(temperature);
        console.log(`The temperature ${temperature}°C is equal to ${convertedTemperature}°F.`);
    } else if (scale === 'F') {
        convertedTemperature = fahrenheitToCelsius(temperature);
        console.log(`The temperature ${temperature}°F is equal to ${convertedTemperature}°C.`);
    } else {
        console.log("Invalid scale entered. Please enter either 'C' or 'F'.");
    }
};


temperatureConverter();