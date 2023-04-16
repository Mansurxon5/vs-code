'use strict';

// 1 masala
// let number = +prompt('Raqam kiriting!');
// if (number > 0) {
//     number++
//     alert(number);
// } else {
//     alert("Siz kiritgan qiymat mavjud emas !");
// }

// 2 masala

// let number = +prompt('Raqam kiriting !');
// if (number > 0) {
//     number++
//     alert(number);
// } else if (number < 0) {
//     number--
//     number--
//     alert(number);
// } else {
//     alert("Sizning kiritgan qiymat mavjud emas !");
// }

// 3 masala
// let number = +prompt('Raqam kiriting!');
// if (number > 0) {
//     number++
//     alert(number);
// } else if (number < 0) {
//     number--
//     number--
//     alert(number);
// } else if (number >= 0) {
//     alert(number + 10)/
// } else {
//     alert('Siz kiritgan qiymat tarmoqda mavjud emas !');
// }

// 4 masala

// let a = +prompt('A soniga qiymat kiriting !'), b = +prompt("B soniga qiymat kiriting"), c = +prompt("C soniga qiymat kiriting");

// if (a > 0 && b > 0 && c > 0) {
//     alert('Hamma son musbatdir !');
// } else if ((a > 0 && b > 0 && c < 0) ||
//     (a > 0 && b < 0 && c > 0) ||
//     (a < 0 && b > 0 && c > 0)) {
//     alert("2 ta musbat son mavjud !");
// } else if ((a > 0 && b < 0 && c < 0) ||
//     (a < 0 && b < 0 && c > 0) ||
//     (a < 0 && b > 0 && c < 0)) {
//     alert("1 ta mustbat son mavjud !");
// } else {
//     alert("Siz kiritgan qiymat mavjud emas !");
// }

// 5 masala

// let a = +prompt("A soniga qiymat kiriting !"), b = +prompt("B soniga qiymat kiriting !"), c = +prompt("C soniga qiymat kiriting !");

// if (a > 0 && b > 0 && c > 0) {
//     alert("Hamma son musbatdir !")
// } else if (a < 0 && b < 0 && c < 0) {
//     alert("Hamma son manfiydir !")
// } else if ((a > 0 && b > 0 && c < 0) ||
//     (a > 0 && b < 0 && c > 0) ||
//     (a < 0 && b > 0 && c > 0)) {
//     alert("2 ta musbat, 1 manfiy son mavjud !")
// } else if ((a > 0 && b < 0 && c < 0) ||
//     (a < 0 && b > 0 && c < 0) ||
//     (a < 0 && b < 0 && c > 0)) {
//     alert("1 ta musbat, 2 manfiy son mavjud !")
// } else {
//     alert("Siz kiritgan qiymat mavjud emas !")
// }

// 6 - masala

// let a = +prompt("A soniga qiymat kiriting !"), b = +prompt("B soniga qiymat kiriting !");

// if (a > b) {
//     console.log('a = ' + a);
// } else if (b > a) {
//     console.log('b = ' + b);
// } else {
//     console.log('Siz kiritgan qiymat tarmoqda mavjud emas !');
// }


// 7 - masala

// let a = +prompt('a soniga qiymat kiriting'), b = +prompt('b soniga qiymat kiriting');

// if (a < b) {
//     console.log(1);
// } else if (b < a) {
//     console.log(2);
// } else {
//     console.log("Siz kiritgan qiymat tarmoqda mavjud emas !")
// }

// 8 masala

// let a = +prompt('a soniga qiymat kiriting'), b = +prompt('b soniga qiymat kiriting');
// if (a > b) {
//     alert('a = ' + a)
//     alert('b = ' +b)
// } else if (b > a) {
//     alert('b = ' + b)
//     alert('a = ' + a);
// }

// 9 masala

// let a = +prompt('A soniga qiymat kiritgan !'), b = +prompt('B soniga qiymat kiriting !'), c;
// c = a;
// a = b;
// b = c;
// console.log('a = ' + a);
// console.log('b = ' +b);

// 10 masala

// let a = +prompt('A soniga qiymat kiriting !'), b = +prompt('B soniga qiymat kiriting !');

// if (a > b || b > a) {
//     alert(a + b);
// } else if (a = b) {
//     alert(0);
// } else  {
//     alert("Siz kiritgan qiymat mavjud emas !");
// }

// 11 masala

// let a = +prompt('a soniga qiymat kiriting'), b = +prompt('b soniga qiymat kiriting');
// if (a > b) {
//     alert('a = ' + a)
//     alert('b = ' + b)
// } else if (b > a) {
//     alert('b = ' + b)
//     alert('a = ' + a)
// } else {
//     alert('Siz kiritgan qiymat mavjud emas !')
// }

//  12 masala

// let a = +prompt('A soniga qiymat kiriting'), b = +prompt('B soniga qiymat kiriting'), c = +prompt('C soniga qiymat kiriting');

// if (a > b && a > c && b < c || a > b && b < c) {
//     alert('b = ' +b)
// } else if (b > a && b > c && a < c || a < b && a < c) {
//     alert('a = ' +a)
// } else if (c < a && c < b) {
//     alert('c = ' +c )
// } else {
//     alert('Siz kiritgan qiymat mavjud emas !')
// }

//  13 masala
// let a = +prompt('A soniga qiymat kiriting'), b = +prompt('B soniga qiymat kiriting'), c = +prompt('C soniga qiymat kiriting');

// if ((a < b && b < c) || (a > b && b > c)) {
//     alert('b = ' +b)
// } else if ((b > a && a > c) || (b < a && a < c)) {
//     alert('a = ' +a)
// } else if ((a > c && c > b ) || a < c && c < b) {
//     alert('c = ' +c)
// } else {
//     alert("Siz kiritgan qiymat tarmoqda mavjud emas ! ")
// }

// 14 masala

// let a = +prompt('A ga Raqam kiriting !'), b = +prompt('B ga Raqam kiriting !'), c = +prompt('C ga Raqam kiriting !');
// if ((a > b && b < c && a > c)) {
//     alert('b = ' +b)
//     alert('a = ' +a)
//     alert('c = ' +c);
// } else if ((a > b && b < c && a < c)) {
//     alert('b = ' + b)
//     alert('a = ' + a)
//     alert('c = ' + c);
// } else if ((b > a && a < c && b < c))  {
//     alert('a = ' +a)
//     alert('b = ' +b)
//     alert('c = ' +c);
// } else if ((a < b && a < c && b > c)) {
//     alert('a = ' + a)
//     alert('c = ' + c)
//     alert('b = ' + b);
// } else if ((a > c && c < b && a < b) ) {
//     alert("c = " +c)
//     alert("a = " +a)
//     alert("b = " + b);
// } else if ((a > c && c < b && a > b)) {
//     alert("c = " + c)
//     alert("b = " + b)
//     alert("a = " + a);
// } else {
//     alert("Siz kiritgan qiymat tarmoqda mavjud emas !")
// }

// 15 masala

// let a = +prompt('A ga Raqam kiriting !'), b = +prompt('B ga Raqam kiriting !'), c = +prompt('C ga Raqam kiriting !');
// if ((a > b && b > c && a > c) || (a < b && b > c && a > c)) {
//     console.log(`a = ${a}`);
//     console.log(`b = ${b}`);
// } else if ((a < b && b > c && a < c) || (a < b && b < c && a < c)) {
//     console.log(`b = ${b}`);
//     console.log(`c = ${c}`);
// } else if ((a > b && b < c && a > c) || (a > b && b < c && a < c)) {
//     console.log(`a = ${a}`);
//     console.log(`c = ${c}`);
// }

// 16 masala

// let a = +prompt('A ga Raqam kiriting !'), b = +prompt('B ga Raqam kiriting !'), c = +prompt('C ga Raqam kiriting !');

// if (a < b && b < c) {
//     alert((a + b + c) * 2)
// } else {
//     alert(`a = ${a / -1}`)
//     alert(`b = ${b / -1}`)
//     alert(`c = ${c / -1}`)
// }

// 17 masala

// let a = +prompt('A ga Raqam kiriting !'), b = +prompt('B ga Raqam kiriting !'), c = +prompt('C ga Raqam kiriting !');
// if ((a < b && b < c) || (a > b && b > c)) {
//     alert((a + b + c) * 2)
// } else {
//     alert(`a = ${a / -1}`)
//     alert(`b = ${b / -1}`)
//     alert(`c = ${c / -1}`)
// }

// 18 masala

// let a = +prompt('A ga Raqam kiriting !'), b = +prompt('B ga Raqam kiriting !'), c = +prompt('C ga Raqam kiriting !');

// if (a = b) {
//     alert(`a = b = ${a = b}`)
//     alert('c = ' + 1)
// } else {
//     alert("Siz kiritgan qiymat tarmoqda mavjud emas !")
// }

// 19 masala

// let a = +prompt('A ga Raqam kiriting !'), b = +prompt('B ga Raqam kiriting !'), c = +prompt('C ga Raqam kiriting !'), d = +prompt('D ga Raqam kiriting !');

// if (a = b = c) {
//     alert(`a = b = c = ${a = b}`)
//     alert('d = ' + 1)
// } else {
//     alert("Siz kiritgan qiymat tarmoqda mavjud emas !")
// }

// 28 masala

// let yil = +prompt("Ixtiyoriy son  kiriting !")

// if (yil) {
//     alert(yil * 365)
// }

// 29 masala

// let a = +prompt('A soniga qiymat kiriting !', 2)
// if (a > 0 && a % 2 === 0) {
//     alert('Musbat juft son !')
// } else if (a > 0 && a % 2 === 1) {
//     alert('Musbat toq son !')
// } else if (a < 0 && a % 2 === 0) {
//     alert('Manfiy juft son !')
// } else if (a < 0 && a % 3 === 0) {
//     alert('Manfiy toq son !')
// } else if (a > 0 < 1) {
//     alert("Son nolga (0) teng !")
// }

// 30 masala

// let son = +prompt('Ixtiyoriy son kiriting !', 10) 
// if (son < 10 && son % 2 === 0) {
//     alert('Siz kiritgan qiymat 1 xonali juft son !')
// } else if (son > 10 && son < 100 && son % 2 === 0 ) {
//     alert('Siz kiritgan qiymat 2 xonali juft son !')
// } else if (son > 100 && son < 1000 && son % 2 === 0) {
//      alert('Siz kiritgan qiymat 3 xonali juft son !')
// }else if (son < 10 && son % 2 === 1) {
//    alert('Siz kiritgan qiymat 1 xonali toq son !') 
// } else if (son > 10 && son < 100 && son % 2 === 1) {
//     alert('Siz kiritgan qiymat 2 xonali toq son !')
// } else if (son > 100 && son < 1000 && son % 2 === 1) {
//     alert('Siz kiritgan qiymat 3 xonali toq son !')
// } else {
//     alert('Siz kiritgan qiymat tarmoqda mavjud emas !')
// }





// 22 - masala

// if (x !== 0 && y !== 0) {
//     if () {

//     } else if () {
        
//      }
// } else {
//     alert('Error')
// }