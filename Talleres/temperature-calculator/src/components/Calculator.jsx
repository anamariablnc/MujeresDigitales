import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

const Calculator = () => {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temperature) => {
        setScale('c');
        setTemperature(temperature);
    };

    const handleFahrenheitChange = (temperature) => {
        setScale('f');
        setTemperature(temperature);
    };

    const convertTemperature = (temperature, convert) => {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        return Math.round(output * 1000) / 1000;
    };

    const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

    const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

    const celsius = scale === 'f' ? convertTemperature(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? convertTemperature(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
};

export default Calculator;
