'use strict'

import * as popUp from '../../../components/popUp.js';

const num_PR = "1.6";

export function isOdd() {

    const arrayEven = [];

    for (let i = 1; i <= 7; i++) {
        if (i % 2 !== 0) {
            if (i != 5) {
            arrayEven.push(i);
            } else {
                console.log('Пропускаем нечетное число 5');
            }
        }
    }
    
    popUp.filling(num_PR, arrayEven, true, false);
}