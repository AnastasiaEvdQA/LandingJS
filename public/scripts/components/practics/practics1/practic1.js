'use strict'
import * as popUp from '../../../components/popUp.js';

const num_PR = "1.1";
const greetingText = 'Привет, поздравляю!\n Ваш знак зодиака ';

// Свитчер, который сравнивает полученное значение и выводит на popUp
export function checkZodiac(value, text) {
    switch(value) {
        case 'capricorn':
                popUp.filling(num_PR, greetingText+text, true, false);
            break;

        case 'aquarius':           
                popUp.filling(num_PR, greetingText+text, true, false);
            break;

        case 'pisces':
                popUp.filling(num_PR, greetingText+text, true, false);
            break;

        case 'aries':
                popUp.filling(num_PR, greetingText+text, true, false);
            break;

        case 'taurus':
                popUp.filling(num_PR, greetingText+text, true, false);
            break;

        case 'gemini':
                popUp.filling(num_PR, greetingText+text, true, false);
            break;

        case 'cancer':
                popUp.filling(num_PR, greetingText+text, true, false);
            break;

        case 'leo':
                popUp.filling(num_PR, greetingText+text, true, false);
            break;

        case 'virgo':
                popUp.filling(num_PR, 'Сочуствие и только сочуствие, но к сожалению вы: '+text+' :(', true, false);
            break;

        case 'libra':            
                popUp.filling(num_PR, greetingText+text, true, false);
            break;

        case 'scorpio':
                popUp.filling(num_PR, greetingText+text, true, false);
            break;

        case 'sagittarius':            
                popUp.filling(num_PR, greetingText+text, true, false);
            break;

        default:
            popUp.filling(num_PR, 'Упс, возможно вы не выбрали знак зодиака или еще что-то', true, false);

    }
}