'use strict'
import * as common from './components/common.js';
import * as popUp from './public/scripts/components/popUp.js';
import * as pr1_0 from './public/scripts/components/practics/practics1/practic0.js';
import * as pr1_1 from './public/scripts/components/practics/practics1/practic1.js';
import * as pr1_2 from '/public/scripts/components/practics/practics1/practic2.js';
import * as pr1_3 from '/public/scripts/components/practics/practics1/practic3.js';
import * as pr1_4 from '/public/scripts/components/practics/practics1/practic4.js';
import * as pr1_5 from '/public/scripts/components/practics/practics1/practic5.js';
import * as pr1_6 from '/public/scripts/components/practics/practics1/practic6.js';
import * as pr2_1 from '/public/scripts/components/practics/practics2/practic1.js';
import * as pr2_2 from '/public/scripts/components/practics/practics2/practic2.js';
import * as pr2_3 from '/public/scripts/components/practics/practics2/practic3.js';
import * as pr2_4 from '/public/scripts/components/practics/practics2/practic4.js';
import * as pr2_5 from '/public/scripts/components/practics/practics2/practic5.js';
import * as pr2_6 from '/public/scripts/components/practics/practics2/practic6.js';
import * as pr2_7 from '/public/scripts/components/practics/practics2/practic7.js';
import * as pr2_8 from '/public/scripts/components/practics/practics2/practic8.js';
import * as pr2_9 from '/public/scripts/components/practics/practics2/practic9.js';
import * as pr2_10 from '/public/scripts/components/practics/practics2/practic10.js';
import * as pr2_11 from '/public/scripts/components/practics/practics2/practic11.js';
import * as testing from '/public/scripts/components/testing.js';

// #Common && PopUp
// Закрытие popUp
common.Element('ico__closeCross').addEventListener('click',  popUp.close);

// #Слушатели прокрутки страницы (сенсор + колесико мыши)
let startY =0;
let endY = 0;
// Плавная прокрутка страницы (height 100%) к следующей секции
document.addEventListener('wheel', common.scrollPage);

// слушатели для сенсорной прокрутки
document.addEventListener('touchstart', function(event) {
    const touch = event.touches[0];
    startY = touch.clientY;
    
}, false);

document.addEventListener('touchmove', function(event) {
    const touch = event.touches[0];
    endY = touch.clientY;
}, false);

document.addEventListener('touchend', function(event) {
    const deltaY = endY - startY;
    common.handleScroll(startY-endY);
}, false);


// Prompt с просьбой представиться при загрузке страницы
document.addEventListener('DOMContentLoaded', common.addNameLocalStorage);
// Разместить footer вконце лендинга
document.addEventListener('DOMContentLoaded', common.postFooterBlock);
// Вернуться к началу страницы
common.Element('imgReturn').addEventListener('click', common.returnTopPage);
// Возвращение в начало страницы, при ее загрузке
document.addEventListener('DOMContentLoaded', common.returnTopPage);
// Запуск relax режима
common.Element('btnRelaxMode').addEventListener('click', () => common.relaxMode(true));
// Выход из relax режима
common.Element('relaxBox').addEventListener('click', () => common.relaxMode(false));

// #Тестирование пользователя
common.Element('btnStartTest').addEventListener('click', testing.start);
// Проверка состояния checked в реальном времени, для формы с селекторами
common.Element('testingSelectors').addEventListener('change', testing.eventTargetRadio);
// Обработчик клика, кнопки "К следующему вопросу" 
common.Element('nextQuestion').addEventListener('click', testing.eventClickNext);

// #Практическая 1
// #Практическая 1.0 Слушатели событий
common.Element('1_btn_pr_1_0').addEventListener('click', pr1_0.getMock);
common.Element('2_btn_pr_1_0').addEventListener('click', pr1_0.determineType);
// #Практическая 1.1 Слушатели событий
common.Element('2_btn_pr_1_1').addEventListener('click', async function() {
    try {
        const selected = await common.SelectedItems('select_zodiac');
        pr1_1.checkZodiac(selected.value, selected.text);
    } catch (error) {
        console.error(error);
    }   
});
// #Практическая 1.2 Слушатели событий
common.Element('2_btn_pr_1_2').addEventListener('click', pr1_2.displayCounetrResults);
// #Практическая 1.3 Слушатели событий
common.Element('2_btn_pr_1_3').addEventListener('click', pr1_3.runViral);
// #Практическая 1.4 Слушатели событий
common.Element('num_inp_1_4').addEventListener('input', pr1_4.activateHandleBtn);
common.Element('num_inp_1_4').addEventListener('keydown', pr1_4.inputKeydown);
common.Element('popUp_input').addEventListener('keydown', pr1_4.popUpinputKeydown);
common.Element('2_btn_pr_1_4').addEventListener('click', pr1_4.eventCheck);
// #Практическая 1.5 Слушатели событий
common.Element('2_btn_pr_1_5').addEventListener('click', pr1_5.isEven);
// #Практическая 1.6 Слушатели событий
common.Element('2_btn_pr_1_6').addEventListener('click', pr1_6.isOdd);

// #Практическая 2
// #Практическая 2.1 Слушатели событий
common.Element('2_btn_pr_2_1').addEventListener('click', pr2_1.printArrays);
// #Практическая 2.2 Слушатели событий
common.Element('2_btn_pr_2_2').addEventListener('click', pr2_2.print5ArrayItems);
// #Практическая 2.3 Слушатели событий
common.Element('2_btn_pr_2_3').addEventListener('click', pr2_3.getArrayLength);
// #Практическая 2.4 Слушатели событий
common.Element('2_btn_pr_2_4').addEventListener('click', pr2_4.getArrayFor);
// #Практическая 2.5 Слушатели событий
common.Element('2_btn_pr_2_5').addEventListener('click', pr2_5.unionArray);
// #Практическая 2.6 Слушатели событий
common.Element('2_btn_pr_2_6').addEventListener('click', pr2_6.lastItemArray);
// #Практическая 2.7 Слушатели событий
common.Element('2_btn_pr_2_7').addEventListener('click', pr2_7.deleteLastItemArray);
// #Практическая 2.8 Слушатели событий
common.Element('2_btn_pr_2_8').addEventListener('click', pr2_8.addItemStartArray);
// #Практическая 2.9 Слушатели событий
common.Element('2_btn_pr_2_9').addEventListener('click', pr2_9.todayDate);
// #Практическая 2.10 Слушатели событий
common.Element('2_btn_pr_2_10').addEventListener('click', pr2_10.formattedTodayDate);
// #Практическая 2.11 Слушатели событий
common.Element('2_btn_pr_2_11').addEventListener('click', pr2_11.multiplicationNumbers);