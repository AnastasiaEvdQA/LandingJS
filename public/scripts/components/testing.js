'use strict'

import * as common from '../components/common.js';

const JSONFilePath = '../../public/data/testing.json';
const messages = ['\nК сожалению тест не пройден :(', '\nПоздравляем вы успешно прошли тест :)'];
const btnStart = common.Element('btnStartTest');
const btnNext = common.Element('nextQuestion');
const blockTest = common.Element('testBox');
const blockNext = common.Element('testBoxIcoNext');
const cursorTitle = common.Element('testCursor');
const scoreBox = common.Element('score');
const questionBox = common.Element('question');
const radios = document.getElementsByName('answers');
const titleTest = common.Element('titleForTestPage');
const blockResult = common.Element('testResult');
const resultHeader = common.Element('testResultHeader');
const resultAnswers = common.Element('testResult__answers');
const nameStorage = localStorage.getItem('nameStorage');

const checkbox = {
    A: {
        radio: common.Element('radioA'),
        label: common.Element('labelA')
    },

    B: {
        radio: common.Element('radioB'),
        label: common.Element('labelB')
    },

    C: {
        radio: common.Element('radioC'),
        label: common.Element('labelC')
    },

    D: {
        radio: common.Element('radioD'),
        label: common.Element('labelD')
    }
};

let totalQuestions = 0;
let selectAnswer = '';
let isStarting = false;
let score = 0;
let JSONData = new Map();
let cursor = -1;

// Функция получающая массив JSON и запускающая тестирование
export function start(){
    blockResult.style.display = 'none';
    titleTest.innerHTML = `
        <h1 id="page__title">Для закрепления результата предлагаем пройти тест</h1>
    `;
    
    common.getJSON(JSONFilePath)
        .then(data => {
            totalQuestions = data.questions.length;
            visiblityTestBox(true);    
            for (let i = 0; i < totalQuestions; ++i){
                JSONData.set(i, {
                    id: data.questions[i].id,
                    question: data.questions[i].question,
                    options: {
                        op1: data.questions[i].options[0],
                        op2: data.questions[i].options[1],
                        op3: data.questions[i].options[2],
                        op4: data.questions[i].options[3]
                    },
                    answer: data.questions[i].answer,
                    selectedAnswer: '',
                    isCorrect: false
                });
            }    

            if (isStarting === false){
                fillingBlockTest(JSONData.get(0).id, JSONData.get(0).question, JSONData.get(0).options);
                cursor = cursor + 1;
                isStarting = true;
            }

        })
}

// Функция - обработчик, для выбранного элемента radio
export function eventTargetRadio(event){  
    if (event.target.name === 'answers') {
        selectAnswer = event.target.value;
        updateJSONData(cursor);
        activityBlockNext(true);
        
        btnNext.addEventListener('mouseenter', () => {
            btnNext.style.opacity = '1';
        });

        btnNext.addEventListener('mouseleave', () => {
            btnNext.style.opacity = '0.6';
        });

        btnNext.addEventListener('mousedown', () => {
            btnNext.style.width = '90%';
        });
        
        btnNext.addEventListener('mouseup', () => {
            btnNext.style.width = '100%';
        });

    } else {
        activityBlockNext(false);
    }
}

// Функция - обработчик события click, для кнопки "к следующему вопросу"
export function eventClickNext(event){
    if (event) {  
        activityBlockNext(false);     
        shiftBlockTest(true);
        counterScore(cursor);
        cursor = cursor + 1;
        clearBlockTest();

        radios.forEach(radio => {
            radio.checked = false;
        });

    } else {
        console.error('Что-то пошло не так');
    }

    if (cursor!=totalQuestions){
        fillingBlockTest(JSONData.get(cursor).id, JSONData.get(cursor).question, JSONData.get(cursor).options);
        activityBlockNext(false);
        common.startTimer(clearShift,1000,1000);
    } else {
        finishTesting();
    }
}

// Функция обновления инфомрации в map
function updateJSONData(id){
    JSONData.get(id).selectedAnswer = selectAnswer;
}

// Функция gпроверяющяя выбранный ответ + подсчитывающая score
function counterScore(id){
    if (selectAnswer == JSONData.get(id).answer){
        JSONData.get(id).isCorrect = true;
        score = score + 1;
    } else {
        JSONData.get(id).isCorrect = false;
    }
}

//Функция отображающая|скрывающая весь контент testBox + отображающая|скрывающая кнопку "Приступить к тестированию"
function visiblityTestBox(state) {
    if (state) {
        btnStart.style.display = 'none';
        blockTest.style.display = 'flex';
        blockNext.style.display = 'flex';
    } else if (state === false) {
        btnStart.style.display = 'block';
        blockTest.style.display = 'none';
        blockNext.style.display = 'none';
    } else {
        console.error('Невозможно определить состояние для отображения testBox: ');
    }
}

//Функция отображающая|скрывающая блок с кнопкой "К следующему вопросу"
function activityBlockNext(state){
    if (state){
        blockNext.style.visibility = 'visible';
        blockNext.style.transform = 'perspective(500px) rotateY(0deg)';
    } else if (state === false){
        blockNext.style.visibility = 'hidden';
        blockNext.style.transform = 'perspective(500px) rotateY(-90deg)';
    } else {
        console.error('Неопределенно состояние визуализации кнопки "к следующему вопросу"');
    }
}

// Функция анимированного сдвига влево, основнога блока к контентом
function shiftBlockTest(state){
    if (state){
        blockTest.style.position = 'relative';
        
        for (let i = 0; i<=blockTest.offsetWidth; ++i){
            blockTest.style.right = i+'px';
        }
    } else if (state === false){
        for (let i = blockTest.offsetWidth; i>=0; --i){
            blockTest.style.right = i+'px';
        }
    } else{
        console.error('событие сдвига testBox неопределенно');
    }
}

//Функция передающая событие в таймер, для возвращения анимации сдвига, для BlockTest
function clearShift(){
    shiftBlockTest(false);
}

// Функция которая заполняет BlockTest, данными полученными из JSON
function fillingBlockTest(cursor, question, options){  
    cursorTitle.innerHTML = `Вопрос ${cursor}/${totalQuestions}`;
    scoreBox.innerHTML = `Правильных ответов ${score}`;
    questionBox.innerHTML = question;
    checkbox.A.radio.value = checkbox.A.label.innerHTML  = options.op1;
    checkbox.B.radio.value = checkbox.B.label.innerHTML  = options.op2;
    checkbox.C.radio.value = checkbox.C.label.innerHTML  = options.op3;
    checkbox.D.radio.value = checkbox.D.label.innerHTML  = options.op4;
}

// Функция очищает BlockTest
function clearBlockTest(){
    cursorTitle.innerHTML = '';
    questionBox.innerHTML = '';
    scoreBox.innerHTML = '';
    checkbox.A.radio.value = checkbox.A.label.innerHTML  = '';
    checkbox.B.radio.value = checkbox.B.label.innerHTML  = '';
    checkbox.C.radio.value = checkbox.C.label.innerHTML  = '';
    checkbox.D.radio.value = checkbox.D.label.innerHTML  = '';
}

// Функция присваивающая результат
function finishTesting(){

    titleTest.innerHTML = `
        <h1 id="page__title">Результаты прохождения теста</h1>
    `;

    blockResult.style.display = 'flex';
    btnStart.innerText = 'ПРОЙТИ ТЕСТ ПОВТОРНО?';

    if (score == totalQuestions) {
        resultHeader.innerText = `${nameStorage} ваш результат ${score} из ${totalQuestions}. ${messages[1]}`;
    } else {
        resultHeader.innerText = `${nameStorage} ваш результат ${score} из ${totalQuestions}. ${messages[0]}`;
    }

    resultAnswers.innerHTML = '';

    for (let i=0; i<totalQuestions; ++i){
        let result = {};
        result.id = JSONData.get(i).id;
        result.question = JSONData.get(i).question;
        result.selectedAnswer = JSONData.get(i).selectedAnswer;
        if (JSONData.get(i).isCorrect === true){
            result.isCorrect = 'Верно';
        } else {
            result.isCorrect = 'Не верно';
        }

        resultAnswers.innerHTML += `
            <div class="questionResultBox">
                <p class="testResultBoxTest"><b>Вопрос:</b> ${result.id}</p>
                <p class="testResultBoxTest">${result.question}</p>
                <p class="testResultBoxTest"><b>Ответ:</b></p>
                <p class="testResultBoxTest">${result.selectedAnswer}</p>
                <p class="testResultBoxTest">Статус: <b>${result.isCorrect};</b></p>
            </div>
        `;
        
    }
    resetValuesTesting()
}

// Функция возвращающая значения по умолчанию
function resetValuesTesting() {
    totalQuestions = 0;
    selectAnswer = '';
    isStarting = false;
    score = 0;
    JSONData.clear();
    cursor = -1;
    shiftBlockTest(false);
    clearBlockTest();
    visiblityTestBox(false);
    blockTest.style.position = 'static';
    activityBlockNext(false);
}