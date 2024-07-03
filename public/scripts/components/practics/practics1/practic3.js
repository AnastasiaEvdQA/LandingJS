'use strict'

import * as common from '../../../../scripts/components/common.js';
import * as popUp from '../../../components/popUp.js';

const message = 'Внимание!, это вирус';
const num_PR = "1.3";

// Инициализация запуска вируса
export function runViral() {
    common.startTimer(openPopUp, 0, 5000);
    common.startTimer(closedPopUp, 10, 5000);
}

// Выдать предупреждение с вирусом на popUp
function openPopUp() {
    popUp.filling(num_PR, message, true, false);
}

// Закрыть popUp
function closedPopUp() {
    popUp.close();
}