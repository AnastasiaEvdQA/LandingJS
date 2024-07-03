'use strict'
import * as popUp from '../../../components/popUp.js';
const num_PR = "1.2";

// Цикл For
function counterFor() {
    const numbers = [];
    for (let i = 1; i <= 40; i++) {
        numbers.push(i);
    }
return numbers;
}

// Цикл While
function counterWhile() {
    const numbers = [];
    let i = 1;
    while (i <= 40) {
        numbers.push(i);
        i++;
    }
    return numbers;
}

// Цикл do While
function counterDoWhile() {
     const numbers = [];
     let i = 1;
     do {
        numbers.push(i);
        i++;
    } while (i <= 40);
    return numbers;
}

// Функция - агрегатор: Объеденяет результат 3 счетчиком в один ответ
function unionResult(){
    const result = `
        Цикл For: ${counterFor().toString()}

        Цикл While: ${counterWhile().toString()}

        Цикл Do While: ${counterDoWhile().toString()}
    `;
    return result;
}

export function displayCounetrResults() {
    popUp.filling(num_PR, unionResult(), true, false);
}