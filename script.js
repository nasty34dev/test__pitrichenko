let numberOfFilms;

function start() {
  numberOfFilms = +prompt('сколько фильмов вы уже просмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('сколько фильмов вы уже просмотрели?', '');
  }
}

start();



const personalMovieDB = {
  count: numberOfFilms,
  movies: {}, //пустой объект 
  actors: {},
  generals: [], // пустой массив
  privat: true
};

//условие
// const a = prompt('один из просмотренных фильмов?', ''),
//   b = prompt('на сколько его оцените?', ''),
//   c = prompt('один из просмотренных фильмов?', ''),
//   d = prompt('на сколько его оцените?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

//циклы


function renumberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('один из просмотренных фильмов?', ''),
      b = prompt('на сколько его оцените?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

// renumberMyFilms();




function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count > 30) {
    console.log('вы класснический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('вы киноман');
  } else {
    console.log('произошла ошибка');
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGeners() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр ${i}`);
    personalMovieDB.generals[i - 1] = genre;
  }
}

writeYourGeners();

console.log(personalMovieDB);