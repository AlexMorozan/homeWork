/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB(){
    if(personalMoviesDB.privat == false){
        console.log(personalMoviesDB);
    }
}

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        personalMoviesDB.genres[i] = prompt("Ваш любимый жанр под номером");
    }
}

writeYourGenres();
showMyDB();

function printObj(obj){
    for (let tmp in obj){
    console.log(`в поле ${tmp} значения равно ${obj[tmp]}`);
    }

}
printObj(personalMoviesDB);