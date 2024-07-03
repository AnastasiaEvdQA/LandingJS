'use strict'

import * as popUp from '../../../components/popUp.js';

const num_PR = "2.1";

// Литеральная нотация
let arrayLiteral = [1, 2, 3, 4, 5];

// Конструктор Array:
let arrayConstuctor = new Array('aple', 'orange', 'cherry', 'banana');

// C использованием метода from
let arrayFrom = Array.from('hello');

// C использованием метода of
let arrayOf = Array.of('1h', '2e', '3l', '4l', '5o');

let result = `
    1-й Сопособ создания массива - "Литеральная нотация": ${arrayLiteral}

    2-й Сопособ создания массива - "Конструктур Array": ${arrayConstuctor}

    3-й Сопособ создания массива - "Метод from": ${arrayFrom}
    
    4-й Сопособ создания массива - "Метод of": ${arrayOf}
`;

export function printArrays() {
    popUp.filling(num_PR, result, true, false);
}