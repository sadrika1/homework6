// task 1
const arrayTaskOne = [1, 5, 4, 10, 0, 3]; 

for (let i = 0; i < arrayTaskOne.length; i++) {
  console.log(arrayTaskOne[i]);
  if (arrayTaskOne[i] === 10) break;
}

// task 2
const arrayTaskTwo = [1, 5, 4, 10, 0, 3];
console.log(arrayTaskTwo.indexOf(4));


// task 3
const arrayTaskThree = [1, 3, 5, 10, 20];
console.log(arrayTaskThree.join('')); 

/* alternative task 3
const arrayTaskTwo = [1, 5, 4, 10, 0, 3];

arrayTaskTwo.forEach((el, index) => {
	console.log(`${index}: ${el}`);
});
*/

// task 4
const arrayTaskFoure = [];
const arrayTaskFoureEven = [];

for (let n = 1; n <= 10; n++) {
   arrayTaskFoure.push(Math.floor(Math.random() * 11));
}

for (let item of arrayTaskFoure) {
  if (item % 2 === 0) {
    arrayTaskFoureEven.push(item);
  }
}

console.log(arrayTaskFoure);
console.log(arrayTaskFoureEven);

// task 5
let arrayTaskFive = [];

for (let i = 0; i < 3; i++) {
	arrayTaskFive[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arrayTaskFive[i].push(1);
	}
}
console.log(arrayTaskFive);

/* alternative task 5

let arrayTaskFive = [
    [], [], [],
  ];
  
for (let inTask of arrayTaskFive) {
    for (let a = 0; a < 3; a++) {
      inTask.push(1);
    }
}
  
console.log(arrayTaskFive);
*/

// task 6
const arrayTaskSix = [1, 1, 1]
arrayTaskSix.push(2, 2, 2);
console.log(arrayTaskSix);

// task 7 
const arrayTaskSeven = [9, 8, 7, 'a', 6, 5];
arrayTaskSeven.sort();
arrayTaskSeven.pop();
console.log(arrayTaskSeven);

// task 8 
const arrayTaskEight = [9, 8, 7, 6, 5]

let userNum = Number(prompt("Введите число от 0 до 10"));

arrayTaskEight.includes(userNum) ? console.log(`В массиве есть число ${userNum}`) : console.log(`В массиве нет числа ${userNum}`);

// task 9
let arrayTaskNine = 'abcdef';
arrayTaskNine = arrayTaskNine.split('');
arrayTaskNine.reverse();
console.log(arrayTaskNine.join(''));

// task 10

const arrayTaskTen = [];
for (let n = 1; n <= 6; n++) {
  arrayTaskTen.push(Math.floor(Math.random() * 11));
}
let sum = 0
for (let i = 0; i < arrayTaskTen.length; i++) {
    sum += arrayTaskTen[i]
}
let average = sum / arrayTaskTen.length;
console.log(average);


// task 11
let arrTaskEleven = [
    [1, 2, 3,],
    [4, 5, 6]
];
let arrTaskElevenTwo = []
  
for (let arrIn of arrTaskEleven) {
    for (let el of arrIn) {
        arrTaskElevenTwo.push(el);
    } 
}
console.log (arrTaskElevenTwo);

// task 12
const arrTwelve = [];
for (let n = 1; n <= 10; n++) {
    arrTwelve.push(Math.floor(Math.random() * 11));
}
console.log(arrTwelve);

for (let i = 0; i < arrTwelve.length; i++) {
    if (i < arrTwelve.length - 1) {
        let sumTwelve = arrTwelve[i] + arrTwelve[i + 1];
        console.log(`Сумма элементов ${i} и ${i + 1} = ${sumTwelve}`);
    } 
}