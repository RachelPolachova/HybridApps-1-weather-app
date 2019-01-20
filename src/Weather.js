import React from 'react';
import ReactDom from 'react-dom'
import WeatherBackground from "./components/WeatherBackground";
const weatherTarget = document.getElementById('weather-target');

ReactDom.render(<WeatherBackground />, weatherTarget);

console.log("webpack bundle works");
