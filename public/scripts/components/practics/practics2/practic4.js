'use strict'

import * as popUp from '../../../components/popUp.js';

const num_PR = "2.4";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const message = 'Вывод элементов массива с помощью оператора For: \n'
let result = '';

export function getArrayFor() {

    for (let i = 0; i < array.length; i++) {
        result += array[i] + ' , ';
    }

    popUp.filling(num_PR, message+result, true, false);
    result = '';
}