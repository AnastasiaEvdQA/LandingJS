'use strict'

import * as popUp from '../../../components/popUp.js';

const num_PR = "2.11";

export function multiplicationNumbers() {
    let min = 0;
    let max = 50;
    let a = Math.round(Math.random() * (max - min) + min);
    let b = Math.round(Math.random() * (max - min) + min);
    let c = a *b;

    let result = `
        Число a: ${a}
        Число b: ${b}
        Произведение a*b: ${c}
    `;

    popUp.filling(num_PR, result, true, false);
}