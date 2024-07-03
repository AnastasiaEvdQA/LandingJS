'use strict'

import * as popUp from '../../../components/popUp.js';

const num_PR = "2.6";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];

let result = `
    Изначальный вариант массива: ${array}

    Последний член массива: ${array[array.length-1]}
`;

export function lastItemArray() {
    popUp.filling(num_PR, result, true, false);
}