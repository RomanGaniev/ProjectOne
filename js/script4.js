"use strict";

// const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

// const personalMovieDB = {
//       count: numberOfFilms,
//       movies: {},
//       actors: {},
//       genres: [],
//       private: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
      count: numberOfFilms,
      movies: {},
      actors: {},
      genres: [],
      private: false
};


// for (let i = 0; i < 2;) {
//       let a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', '');
//       while (a === '' || b === '' || a.length > 50 || b.length > 50 || a == null || b == null){
//             alert('Поля не заполнены или имеют длину больше 50 символов');
//             a = prompt('Один из последних просмотренных фильмов?', '');
//             b = prompt('На сколько оцените его?', '');
//       }
//       personalMovieDB.movies[a] = b;
//       i++;
// }




for (let i = 0; i < 2;i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
      } else {
            console.log('error');
            i--;
      }

}

console.log(personalMovieDB);