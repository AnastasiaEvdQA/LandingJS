'use strict'

import * as popUp from '../../../components/popUp.js';

const num_PR = "2.10";
let today = new Date();
let day = String(today.getDate()).padStart(2, '0');
let month = String(today.getMonth() + 1).padStart(2, '0');
let year = today.getFullYear();


//Функция подставляющая в результат наименование месяца
function monthAssigned(monthString){
    let monthMessage = monthString;
    
    let result = `
        Сегодня ${day} ${monthMessage} ${year} года
    `;

    return result;
}

//Функция возвращающая результат с наименованием месяца, за место числа
function getMonthName(month){
    switch(month) {
        case '01':
            return monthAssigned('Января');
        case '02':           
            return monthAssigned('Февраля');
        case '03':
            return monthAssigned('Марта');
        case '04':
            return monthAssigned('Апреля');
        case '05':
            return monthAssigned('Мая');
        case '06':
            return monthAssigned('Июня');
        case '07':
            return monthAssigned('Июля');
        case '08':
            return monthAssigned('Августа');
        case '09':
            return monthAssigned('Сентября');
        case '10':
            return monthAssigned('октября');       
        case '11':          
            return monthAssigned('Ноября'); 
        case '12':            
            return monthAssigned('декабря');
        default:
            popUp.filling(num_PR, 'Упс, пошло что то не так, месяц не получен', true, false);
    }
}


// Основная функция, которая отправляет результат обработки на popUp
export function formattedTodayDate() {
    popUp.filling(num_PR, getMonthName(month), true, false);
}