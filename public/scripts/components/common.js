'use strict'

// Получить элемент DOM по его id
export function Element(id) {
    if (document.getElementById(id)) {
        return document.getElementById(id);
    } else {
        console.log('Что-то пошло не так, элемент с id '+id+' не найден');
    }
}

// Сделать неактивную кнопку > активной
export function toggleActivityButton(btn, state){
    if (btn) {
        btn.disabled = state;
        btn.style.opacity = 1;

        if (state == false) {
            btn.addEventListener('mouseenter', () => {
                btn.style.backgroundColor = 'rgb(255, 102, 0)';
                btn.style.color = 'black';
                btn.style.fontSize = '1vw';
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.backgroundColor = 'black';
                btn.style.color = 'white';
                btn.style.fontSize = '0.8vw';
            });
        } else {
            btn.style.opacity = 0.4;
            btn.disabled = state;


            btn.addEventListener('mouseenter', () => {
                btn.style.backgroundColor = 'black';
                btn.style.color = 'white';
                btn.style.fontSize = '0.8vw';
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.backgroundColor = 'black';
                btn.style.color = 'white';
                btn.style.fontSize = '0.8vw';
            });
        }

    } else {
        console.log("Кнопка с идентификатором " +btn+" не найдена");
    }
}

// Проверка заполнения Input поля
export function checkFillingInput(checkingValue, actionSucces, actionFail){
    if (checkingValue != '') {
        actionSucces();
    } else {
        actionFail();
    }
}

// Получить значение выбранного элемента выбранной опции, в селекторе
export function SelectedItems(id) {
    return new Promise((resolve, reject) => {
        const element = Element(id);

        if (!element) {
            console.error(`Элемент с id ${id} не найден.`);
            reject(new Error(`Элемент с id ${id} не найден.`));
            return;
        }

        const value = element.value;
        const text = element.options[element.selectedIndex].text;

        resolve({
            value: value,
            text: text
        });

    });
}

// Функция запуска и остановки таймера
export function startTimer(action, timeInterval, timeOut){
    let timer_id = setInterval(action, timeInterval);
        stopTimer(timer_id, timeOut);
}
export function stopTimer(timer_id, timeOut) {
    setTimeout(function() {
        clearInterval(timer_id);
    }, timeOut);
}

// Функция определения типа скроллинга (вверх или вниз)
let currentSection = 0;
let isRelaxMode = false;
const bodyBG = Element('page');


export function scrollPage(event) {
    handleScroll(event.deltaY);
}

export function handleScroll(deltaY){
    if (!isRelaxMode) {

        if (deltaY > 0) {
            // Прокрутка вниз

            scrollTo(currentSection + 1);
            bodyBG.style.backgroundColor = 'rgba(0, 0, 0, '+Number(0.733+0.100)+')';
            bodyBG.style.backgroundImage = `url('./public/img/Background/background_logo.webp')`;
            bodyBG.style.backgroundBlendMode = 'darken';
        } else if (deltaY < 0) {
            // Прокрутка вверх
            scrollTo(currentSection - 1);
            bodyBG.style.backgroundColor = 'rgba(0, 0, 0, '+Number(0.833-0.100)+')';
        }

    } else {
        document.body.style.overflow = 'hidden';
    }
}

// Функция прокрутки страницы
function scrollTo(index) {  
    const sections = document.querySelectorAll('section');
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({behavior: 'smooth'});
        currentSection = index;

            if (currentSection == 0){
                bodyBG.style.backgroundImage = `url('/public/img/Background/background_logo_2.png')`;
                bodyBG.style.backgroundBlendMode = '';
            } 
   }
}

// Очистить значение для всех полей ввода (input)
export function ResetInputs() {
    const inputs = document.querySelectorAll('input');

    // Перебираем каждый элемент и сбрасываем его значение
    inputs.forEach(input => {
        input.value = '';
    });

}

// Функция проверяет, представился ли пользователь, а также подставляет текст приветствия на первую страницу
export function addNameLocalStorage(){
    const title = Element('intTitle');
    let nameStorage = localStorage.getItem('nameStorage');
    const message = `Приветствую ${nameStorage}: добро пожаловать в мир JS`;

    if (!nameStorage) {
        localStorage.setItem('nameStorage', prompt('Представьтесь пожалуйста'));
        let storage = localStorage.getItem('nameStorage');
        title.innerText = `Приветствую ${storage}: добро пожаловать в мир JS`;;
    } else {
        title.innerText = message;
    }

}

//Функция которая получает и возвращает высоту всего документа
function getHeightDocument(){
    const documentHeight = document.documentElement.scrollHeight;
    return documentHeight;
}

//Функция которая получает высоту всего документа, и размещает туда landing footer (подвал)
export function postFooterBlock() {
    const footer = Element('landing__footer');
    footer.style.top = getHeightDocument()+'px';
}

const sideIcoNextBlock = Element('testBoxIcoNext');
const frameTestLeft = Element('frameTestLeft');
const btnStart = Element('btnStartTest');
const titleTest = Element('titleForTestPage');
const relaxBox = Element('relaxBox');
const btnRelax = Element('btnRelaxMode');
const textRelax = Element('textRelax');

//Функция - возвращает изначальные настройки стиля, для body
function bodyDefaultStyle(){
    isRelaxMode = false;
    bodyBG.style.backgroundColor = 'rgba(0, 0, 0, 0.733)';
    bodyBG.style.backgroundImage = `url('public/img/Background/background_logo_2.png')`;
    relaxBox.style.visibility = 'hidden';
    textRelax.innerText = '';
    bodyBG.style.backgroundBlendMode = '';
    sideIcoNextBlock.style.display = 'none';
    frameTestLeft.style.width = '100%';
    btnStart.innerText = 'ПРИСТУПИТЬ К ТЕСТИРОВАНИЮ?';
    titleTest.innerHTML = `
        <h1 id="page__title">Для закрепления результата предлагаем пройти тест</h1>
    `;
}

//Функция которая возвращает в начало страницы
export function returnTopPage(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    bodyDefaultStyle();
}

// Функция для получения JSON файла
export function getJSON(jsonFilePath){
    return fetch(jsonFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Ошибка при получении JSON файла:', error);
            throw error;
        });
}

// Функция запуска/остановки relax режима
export function relaxMode(state){
    const title = Element('intTitle');
    let nameStorage = localStorage.getItem('nameStorage');
    const relaxMessage = '\n'+nameStorage+'\nПорелаксируй, но не сильно, так как на дворе уже '+getTodatDate();

    isRelaxMode = state;

    if(isRelaxMode){
        textRelax.innerText = relaxMessage;
        relaxBox.style.visibility = 'visible';
        relaxBox.style.display = 'flex';
        relaxBox.style.position = 'relative';
        title.style.display = 'none';
        btnRelax.style.display = 'none';
    } else {
        titleTest.innerHTML = `
            <h1 id="page__title">Для закрепления результата предлагаем пройти тест</h1>
        `;
        textRelax.innerText = '';
        relaxBox.style.visibility = 'hidden';
        relaxBox.style.display = 'none';
        title.style.display = 'block';
        btnRelax.style.display = 'block';
    }

}

//Функция возвращающая сегодняшнуюю дату в формате 1 Январа 2024 Года
function getTodatDate(){
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let year = today.getFullYear();
    
    let date = `
        ${day} ${getMonthName(month)} ${year} года
    `;

    return date;
}

//Функция возвращающая наименование месяца
export function getMonthName(month){
    switch(month) {
        case '01':
            return 'Января';
        case '02':           
            return 'Февраля';
        case '03':
            return 'Марта';
        case '04':
            return 'Апреля';
        case '05':
            return 'Мая';
        case '06':
            return 'Июня';
        case '07':
            return 'Июля';
        case '08':
            return 'Августа';
        case '09':
            return 'Сентября';
        case '10':
            return 'октября';       
        case '11':          
            return 'Ноября'; 
        case '12':            
            return 'декабря';
        default:
            console.error('Упс, пошло что то не так, месяц не получен');
    }
}