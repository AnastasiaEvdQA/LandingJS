'use strict'
import { Element, toggleActivityButton } from '../../../../scripts/components/common.js';
import * as popUp from '../../../components/popUp.js';

const x = "Какой то текст", y = 123, num_PR = "1.0";

// #Практическая 1.0. Получить mock данные
export function getMock(){
    Element('wt_result_1_0').innerText = "Значение переменной X: "+x+"\n"+"Значение переменной Y: "+y;
    toggleActivityButton(Element('2_btn_pr_1_0'), false);
}

// #Практическая 1.0. Определить тип переменных и вывести в блок с результатом popUp
export function determineType(){
    let result = "Тип переменной X "+"("+x+") = "+typeof(x)+"\n"+"Тип переменной Y "+"("+y+") = "+typeof(y);
    
    if (result) {
        popUp.filling(num_PR, result, true, false);
    } else {
        console.log('Рузультат по каким то причинам не заполнен');
    }
}