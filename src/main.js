import React from 'react';
import ReactDom from 'react-dom'
import App from './App';
// import Test from './Test';
const reactTarget = document.getElementById('react-target');

ReactDom.render(<App />, reactTarget);

console.log("webpack bundle works");
