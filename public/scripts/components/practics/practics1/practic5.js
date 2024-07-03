'use strict'

import * as popUp from '../../../components/popUp.js';

const num_PR = "1.5";

export function isEven() {

    const arrayEven = [];

    for (let i = 8; i <= 20; i++) {
        if (i % 2 === 0) {
            arrayEven.push(i);
        }
    }
    
    popUp.filling(num_PR, arrayEven, true, false);
}