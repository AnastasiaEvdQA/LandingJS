'use strict'

import * as popUp from '../../../components/popUp.js';

const num_PR = "2.8";
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 123];
let arrayAddItem = [220, ...array];

let result = `
    Изначальный вариант массива: ${array}

    Массив после добавления элемента вначала: ${arrayAddItem}

    Элемент массива, который добавлен в начале: ${arrayAddItem[0]}
`;

export function addItemStartArray() {
    popUp.filling(num_PR, result, true, false);
}