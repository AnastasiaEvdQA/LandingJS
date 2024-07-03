'use strict'

import * as popUp from '../../../components/popUp.js';

const num_PR = "2.2";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = `
    Весь массив: ${array}

    5-й член масства: ${array[5]}

    Птому что интексация массива начинается с 0 :)
`;

export function print5ArrayItems() {
    popUp.filling(num_PR, result, true, false);
}