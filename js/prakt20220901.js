// "use strict";
// let a = 5;
// alert(a);

// let phrase = "Hello";
// function say(name) {
//   alert(`${phrase}, ${name}`);
// }
// say("John");

// let name = "John";
// function sayHi() {
//   alert("Hi, " + name);
// }
// name = "Pete"; // (*)
// sayHi(); // Pete

// "use strict";
// let number = 5;
// console.log(number);
// function logNumber() {
//   let number = 4;
//   console.log(number);
// }
// number = 6;
// logNumber();

// "use strict";
// let number = 5;
// debugger;
// console.log(number);
// function logNumber() {
//   let number = 4;
//   debugger;
//   console.log(number);
// }
// number = 6;
// logNumber();
// debugger;

// function test() {
//   let num = 1;

//   return function () {
//     console.log(num);
//     num++
//   };
// }

// let func = test();
// // console.log(func())
// func(); // выведет 1

// func(); //выведет 1
// func(); //выведет 2
// func(); //выведет 3
// func(); //выведет 4
// func(); //выведет 5

// function createCounter() {
//   let counter = 0;
//   const myFunction = function () {
//     counter = counter + 1;
//     return counter;
//   };
//   return myFunction;
// }
// const increment = createCounter(); // (*)
// const c1 = increment(); //1
// const c2 = increment(); //2
// const c3 = increment(); //3
// console.log(c1, c2, c3);

// sum(1)(2) //= 3
// sum(5)(-1) //= 4

// function sum(a) {
//   return function(b) {
//     return a + b; // берёт "a" из внешнего лексического окружения
//   };

// }

// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1) ); // 4

// function func() {
// 	let num = 0;

// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// };

// func()();
// func()();
// func()();

// function func() {
//   let num = 0;

//   return function () {
//     console.log(num);
//     num++;
//   };
// }

// let test = func;
// test()(); //0
// test()(); //0
// test()(); //0

// let test2 = func();
// test2(); //0
// test2(); //1
// test2(); //2

// let num = 1;
// function test() {
//   return function () {
//     console.log(num);
//     num++;
//   };
// }
// let func1 = test(); // первый счетчик
// func1(); //выведет 1
// func1(); //выведет 2
// let func2 = test(); // второй счетчик
// func2(); //выведет 3
// func2(); //выведет 4


  
// 9) Пусть функция в замыкании хранит число 10.
// Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.

// let x=10;
// function zavd9(){
//     return function(){
//         x--;
//         console.log(x)
//     }
// }
// let y=zavd9();
// y()
// y()
// y()
// y()
// y()
// y()
// y()
// y()
// y()
// y()

// 10) Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0,
// а затем каждый последующий вызов функции выводил в консоль сообщение о том,
// что отсчет окончен.

let x=10;
function zavd9(){
    if(x>0){
        return function(){
            if (x<=0){
                console.log(`Відлік закінчений`)
            }
            else{
            x--;
            console.log(x)
            }
        }
    }
    else console.log(`Відлік закінчений`)
}
let y=zavd9();
y()
y()
y()
y()
y()
y()
y()
y()
y()
y()
y()
y()
y()
y()
y()
y()
y()
y()
y()
y()