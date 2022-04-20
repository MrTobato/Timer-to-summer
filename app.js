const items = document.querySelectorAll('.countDown > h4');
const countDownElement = document.querySelector('.fants');

let countDownDate = new Date(2022, 05, 31, 24, 0, 0).getTime();

function getCountTime() {
    //Получить текущее время
    const now = new Date().getTime();

    //найти разницу времени
    const distance = countDownDate - now
    // 1с = 1000с
    // 1м = 60с
    // 1ч = 60м
    // 1д = 24ч

    //создаём переменную в милисекундах
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // Произвести подсчёт для дней, часов минут и секунд
    let days = Math.floor(distance/oneDay);
    let hours = Math.floor(distance % oneDay / oneHour);
    let minutes = Math.floor(distance % oneHour / oneMinute );
    let seconds = Math.floor(distance % oneMinute / 1000);

    //Создаём массив с переменными
    const values = [days, hours, minutes, seconds];

    //добавляем значения переменных на страницу
    items.forEach(function (item, index) {
        item.textContent = (values[index])
    });

    if (distance < 0) {
        clearInterval(countDown);
        countDownElement.innerHTML = "<h4 class='expired'>Время вышло</h4>"
    }
}

//Обновление счётчика каждую секунду
let countDown = setInterval(getCountTime, 1000);

//инициализация текущего времени
getCountTime();

