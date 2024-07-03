'use strict'
import { Element, ResetInputs, postFooterBlock } from '../components/common.js';

const popUp = Element('popUp');
const wrapper = Element('page.blur');
const result = Element('result');
const title = Element('popUp.result.title');
const footer = Element('landing__footer');

// Изменить видимость PopUp
function toggleVisibility(state) {
    let visiblity;
    
    if (state) {
        visiblity = 'flex';
        popUp.style.display = visiblity;
        wrapper.style.filter = 'blur(5px)';
        wrapper.style.pointerEvents = 'none';
        footer.style.opacity = '0';
    } else {
        visiblity = 'none';
        popUp.style.display = visiblity;
        wrapper.style.filter = 'blur(0px)';
        wrapper.style.pointerEvents = 'auto';

    }
}

// Изменить номер практической в заголовке результата
export function fillTitleResult(numberPractice) {
    title.innerText = "Результат выполнения практической работы № " + numberPractice;
}

// Очистить номер практической в заголовке результата
function clearTitleResult() {
    title.innerText = "";
}

// Вывести результат практической работы
function fillResult(value) {
    result.innerText = value;   
}

// Очистить блок с результатом
export function clearResult() {
    result.innerText = "";
}

//Закрыть окно с popUp
export function close() {
    clearTitleResult();
    clearResult();
    ResetInputs();
    toggleVisibility(false);
    footer.style.opacity = '1';
}

//Отобразить/скрыт input popUp
function visiblityInput(state) {
    let input = Element('popUp_input');
    if (state){
        input.style.display = 'flex';
        input.focus();
    } else {
        input.style.display = 'none';
        input.value = '';
    }

}

//Функция-агрегатор: отобразить и заполнить информацию на popUp
export function filling(numberPractice, result, state, StateInput) {
    fillTitleResult(numberPractice);
    fillResult(result);
    visiblityInput(StateInput);
    toggleVisibility(state);
}