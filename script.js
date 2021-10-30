const numberOfFilms = +prompt('сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {}, //пустой объект 
  actors: {},
  generals: [], // пустой массив
  privat: false
};

const a = prompt('один из просмотренных фильмов?', ''),
  b = prompt('на сколько его оцените?', ''),
  c = prompt('один из просмотренных фильмов?', ''),
  d = prompt('на сколько его оцените?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);