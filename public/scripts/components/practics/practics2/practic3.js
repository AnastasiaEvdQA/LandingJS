'use strict'

import * as popUp from '../../../components/popUp.js';

const num_PR = "2.3";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = `
    Весь массив: ${array}

    Длина массива: ${array.length}
`;

export function getArrayLength() {
    popUp.filling(num_PR, result, true, false);
}