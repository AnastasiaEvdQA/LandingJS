'use strict'

import * as common from '../../../../scripts/components/common.js';
import * as popUp from '../../../components/popUp.js';

const messages = {
    success: "Поздравляем!!!\nВы ввели число: ",
    fail: "Вы ввели число меньше 5\nПожалуйста введите новое значение и нажмите клавишу Enter:",
};

const input = common.Element('num_inp_1_4');
const popUpInput = common.Element('popUp_input');
const btn = common.Element('2_btn_pr_1_4');
const num_PR = "1.4";
const callActionKeydown = ['click','inputForm','inputPopup'];
const enabled = function () {common.toggleActivityButton(btn, false)};
const disabled = function () {common.toggleActivityButton(btn, true)};

// Обращение к функции проверки заполненности поля ввода
export function activateHandleBtn(){
    let number = input.value;
    common.checkFillingInput(number, enabled, disabled);
}

// Функция которая определяет, откуда поступил запрос на выполнение основной функции
export function eventCheck(event){
    let numberInp = input.value;

    if (event.type === 'click' && numberInp!='') {
        inputValueCheck(callActionKeydown[0]);
    }
}

// Функция, проверяющая нажатие клавишы enter, интпута на форме
export function inputKeydown(event) {
    let numberInp = input.value;
    if (event.key === 'Enter' && numberInp!='') {
        inputValueCheck(callActionKeydown[1]);
    }
}

// Функция, проверяющая нажатие клавишы enter, интпута на popUp
export function popUpinputKeydown(event) {
    let numberInpPopUp = input.value;

    if (event.key === 'Enter' && numberInpPopUp!='') {
        inputValueCheck(callActionKeydown[2]);
    }
}

// Основная функция, которая заполняет popUp, на основании проверенных условий
function inputValueCheck(actionFrom) {

    if ((actionFrom == callActionKeydown[0])||(actionFrom == callActionKeydown[1])) {
        let number = input.value;

        if (number > 5) {
            popUp.filling(num_PR, messages.success+number, true, false);
        } else {
            popUp.filling(num_PR, messages.fail, true, true);
            popUpInput.focus();
        }

    } else if (actionFrom == callActionKeydown[2]) {
        let numberInputPopup = popUpInput.value;

        if (numberInputPopup > 5) {
            popUp.filling(num_PR, messages.success+numberInputPopup, true, false);
        } else {
            alert('Введите число больше 5');
            popUp.filling(num_PR, messages.fail, true, true);
            popUpInput.focus();
        }

    } else {
        console.log('Неопределен объект-инициатор, для запуска основной функции');
    }

}