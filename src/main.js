// Задача №1 ==================================================================================

/*

const min = +prompt('Введите число для определения четверти ');

    min >= 0 && min <= 15 ? console.log('Первая четверть') : min >= 16 && min <= 30 ? console.log('Вторая четверть'):
    min >= 31 && min <= 45 ? console.log('Третья четверть'): min >= 46 && min <= 59 ? console.log('Четвертая четверть'):
                                                                                      console.log('Некорректное число');

*/


// Задача №2  ==================================================================================


/*

const lang = prompt("Введите значение 'ru' или 'en' ")

if(lang == 'en') {
   const arr = ['monday','tuesday ','wednesday ','thursday ','friday ','saturday ','sunday ']
   console.log(arr)
}

if(lang == 'ru') {
    const arr = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье']
    console.log(arr)
}

*/

//==================================================================================

/*

const lang = prompt("Введите значение 'ru' или 'en' ")

switch(lang) {

     case 'en': {
       const arr = ['monday','tuesday ','wednesday ','thursday ','friday ','saturday ','sunday ']
       console.log(arr)
     } break;

     case 'ru': {
       const arr = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье']
       console.log(arr)
     } break;
 }

*/

//==================================================================================

/*

const lang = +confirm("Дни недели на Английском?");

const arr = [
    ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье'],
    ['monday','tuesday ','wednesday ','thursday ','friday ','saturday ','sunday'],
    ]
        
for(let i = lang; i < arr.length; i++ ){
    console.log(arr[i]);
    break;
}

*/

// Задача №3  ==================================================================================

/*

stop:for(let i = 0; i < 10; i++){
     for(let j = 0; j < 10; j++){
         if(i === 5 && j === 5){
             break stop;
         }
         console.log(i,j)
     }
 }

*/

// Задача №4  ==================================================================================

/*

0 ? console.log(true) : console.log(false);
'0' ? console.log(true) : console.log(false);
({}) ? console.log(true) : console.log(false);
[] ? console.log(true) : console.log(false);
'' ? console.log(true) : console.log(false);

if (1){
     console.log(true)
 } else {
     console.log(false)
 }

*/