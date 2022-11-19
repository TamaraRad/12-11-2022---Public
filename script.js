let fruits = ['Apple', 'Orange', 'Plum'];
// Длина массива = 3
// Последний индекс = 2(Длина массива-1)
// Массив: ['Apple', 'Orange', 'Plum'] = 3
// Индексы:    0          1         2

console.log(fruits);

fruits[1] = 'Tangerine';

console.log(fruits); 

fruits[3] = 'Pear';

//Длина массива
console.log(fruits.length); 

let arr = ['Apple', {name: 'John'}, true, function() {console.log('Hello!'); }];

console.log(arr[1].name); 
arr[3] ();
// function sum() = {
    2+3; 
// } 
// sum();

console.log(fruits[fruits.length - 1]); 
console.log(fruits.at(-1)); 
//Метод at() - возвращает элемент массива с заданыым индексом
//array.at(-1) - возврщает последний элемент в массиве

//Очередь
//shift <= /*****/ <= push

//Стек
/*
|||||| <= push pop=>
||||||
||||||
*/ 

console.log(fruits);

// pop - удаляет последний элемент из массива и возвращает его 

let temp = fruits.pop();
console.log(fruits);
console.log(temp);

//push - добавляет элементы в конец массива 

fruits.push('Mango');
console.log(fruits);

//shift - удаляет из массива первй элемент и возвращает его
fruits.shift();
console.log(fruits);

//unshift - добавляет лемент в начало массива 
fruits.unshift('Peach', 'Grape');
console.log(fruits);



let fruits2 = fruits;
fruits2.pop();

console.log(fruits === fruits2); 
console.log(fruits2);

// Массив: [1 2 3 4 5]
// Индексы: 0 1 2 3 4 

// let fruits = ['Apple', 'Orange', 'Plum'];
// Apple, Orange, Plum
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); 
}

//key - перебирает все элементы массива
for (let key of fruits){
    console.log(key);
}