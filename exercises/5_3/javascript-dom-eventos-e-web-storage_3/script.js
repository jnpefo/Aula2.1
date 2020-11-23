function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function list() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let days = document.querySelector('#days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        let dayList = document.createElement('li');
        dayList.innerText = dezDaysList[i];
        dayList.className = 'day'
        days.appendChild(dayList);
        if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
            dayList.className = 'day holiday';
        }
        if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
            dayList.className = 'day friday';
        }
        if (dezDaysList[i] === 25) {
            dayList.className = 'day holiday friday';
        }
    }
}
list();

function holiday(string) {
    let buttonH = document.createElement('button');
    buttonH.innerHTML = string;
    buttonH.id = 'btn-holiday';
    document.getElementsByClassName('buttons-container')[0].appendChild(buttonH);
}
let string = 'Feriados';
holiday(string);

function changeColor(cor) {
    let buttonHC = document.querySelector('#btn-holiday');
    buttonHC.addEventListener('click', function () {
        let aHoliday = document.getElementsByClassName('holiday');
        for (let i = 0; i < aHoliday.length; i += 1) {
            if (aHoliday[i].style.backgroundColor === cor) {
                aHoliday[i].style.backgroundColor = 'rgb(238,238,238)';
            } else {
                aHoliday[i].style.backgroundColor = cor;
            }
        }
    });
}
changeColor('red');
