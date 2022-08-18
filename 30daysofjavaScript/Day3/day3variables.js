//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = typeof'Preston'
let lastName = typeof'Schluterman'
let country = typeof'USA'
let age = typeof (23); 
let isMarried = false; 
const now = new Date()
const year = now.getFullYear()
console.log(typeof('10')); //come back to later 
console.log(typeof(parseInt('9.8')));//come back to later

//Boolean True and falsely 
console.log(3>6); //false 
console.log(4<2); //false
console.log(2===1);//false 
console.log(2==2); //true
console.log(9>3); //true
console.log(2<4); //true


console.log(4 > 3);//true
console.log(4 >= 3);//true
console.log(4 < 3);//false
console.log(4 <= 3);//false
console.log(4 == 4);//true
console.log(4 === 4);//true
console.log(4 != 4);//false
console.log(4 !== 4);//false
console.log(4 != '4');//false
console.log(4 == '4');//true
console.log(4 === '4');//false
let python = 'Python';
let jargon ='Jargon'
console.log(python.length < jargon.length);

console.log(4 > 3 && 10 < 12)//t Correct
console.log(4 > 3 && 10 > 12)//f Correct
console.log(4 > 3 || 10 < 12)//f Wrong
console.log(4 > 3 || 10 > 12)//f Wrong
console.log(!(4 > 3))//f Correct
console.log(!(4 < 3))//t Correct
console.log(!(false))//t Correct
console.log(!(4 > 3 && 10 < 12))//f Correct
console.log(!(4 > 3 && 10 > 12))//t Correct
console.log(!(4 === '4'))//t Correct
console.log (!'on' ) //There is no 'on' in both dragon and python No Clue 
//Date Object examples 

console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getDate()+1);
console.log(now.getHours());
console.log(now.getMinutes());
const allSeconds = Date.now();
console.log(allSeconds);

//Level Two 
/*
const baseValue = prompt('base','number goes here')
const heightValue = prompt('height', 'number goes here')
const areaValue = (baseValue * heightValue) /2;
console.log(
    `The area of the triangle is ${areaValue}`
  );
  
  const sideA = prompt('Side A Value', 'Place Number')
  const sideB = prompt('Side B Value', 'Place Number')
  const sideC = prompt('Side C Value','Place Number')
  const perimeterValue = (parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC));
  console.log(`The Perimter of the triangle is ${perimeterValue}`);
  
const rectWidth = prompt('Size of Width','#')
const rectHeight = prompt('size of Height','#')
const rectArea = (2*(parseFloat(rectWidth)+ parseFloat(rectHeight)));
console.log(`The area of the rectangle is ${rectArea}`)
*/
const PI = 3.14 ;
let radius = 6 ;
const areaOfCircle = PI * radius *radius;
console.log(areaOfCircle);
const circumfrance = 2* PI * radius;
console.log(circumfrance);
/*
let x = 5;
let y = 2 * `${x}` -2;
console.log(y);
*/
let x1 = 2;
let x2 = 6;
let y1 = 2;
let y2 = 10;
let slope = (y2 - y1)/(x2 - x1);
console.log(slope);

let x = -3;
let y = (x**2) + (6 * x) + 9;
console.log(y); 
/*
let hours = prompt('hours you worked','#')
let rate = prompt('Hourly Rate','#')
let message = 'Your weekly earnings are'
let amount = `${hours}`* `${rate}`;
console.log( message , amount);

/* 
if (firstName > 7){
  console.log('your name is too long')
} else if {

} IDK what to do on Q10-11
*/
let myAge = 23
let yourAge = 12
let ageDif = Math.abs(`${myAge}`- `${yourAge}`);
console.log(`I am ${ageDif} years than you`);
//Skipping Q10-13
let yearsLived = prompt('Enter the number of years you live','#')
let secondsLived = `${yearsLived}`* 3.154e+7 ;
console.log(secondsLived);
const month = now.getMonth()+1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes()
console.log(`${year}/${month}/${date}/${hours}/${minutes}`);
console.log(`${date}/${month}/${year}/${hours}/${minutes}`);