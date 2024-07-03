'use strict'

import * as popUp from '../../../components/popUp.js';

const num_PR = "2.9";
let today = new Date();
let formattedDate = today.toISOString().split('T')[0];

let result = `
    Сегодня ${formattedDate}
`;


export function todayDate() {
    popUp.filling(num_PR, result, true, false);
}