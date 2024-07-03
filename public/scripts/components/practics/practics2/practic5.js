'use strict'

import * as popUp from '../../../components/popUp.js';

const num_PR = "2.5";
const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayB = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k'];
let arrayC = arrayA+','+arrayB;
const result = `
    Массив 1: ${arrayA}
    Массив 2: ${arrayB}

    Объедененный массив 3: ${arrayC}

`;

export function unionArray() {
    popUp.filling(num_PR, result, true, false);
}