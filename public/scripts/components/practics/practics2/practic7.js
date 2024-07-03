
'use strict'

import * as popUp from '../../../components/popUp.js';

const num_PR = "2.7";
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 123];

let result = `
    Изначальный вариант массива: ${array}

    Элемент массива который был удален: ${array.pop()}

    Массив после удаления элемента: ${array}
`;

export function deleteLastItemArray() {
    popUp.filling(num_PR, result, true, false);
}