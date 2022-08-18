/*
let num = prompt('how old are you','#');
if (num > 18){
    console.log('You are old enough to drive')
} else {
    console.log(18 - num,'more years and youll be able to drive');
}

let myAge = 23;
let yourAge = prompt('Enter your Age','#')

if (yourAge > myAge){
    console.log("you are",(yourAge - myAge),"years older than me")
} else if(myAge > yourAge) {
    console.log("you are", (myAge - yourAge),"years younger than me")
} else{
    console.log("we are the same age")
}

let a = 4
let b = 3
if (a > b){
    console.log(a , "is greater than",b)
} else if (b > a){
    console.log(b , "is greater than", a)
}

if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}
 
let grade = prompt('Students Grade ', 'exp. 30')
if (grade >= 90){
    console.log('your grade is an A')}
    else if(grade >= 70  && grade <=89){
        console.log('B')
    } else if (grade >=60 && grade<=69){
        console.log('c')
    } else if(grade >=50 && grade <=59){
        console.log('d')
    } else if (grade <=49){
        console.log('f')
    }
    

    let monthUserInput = prompt('What month is today','exp.August')
let month = monthUserInput.toLowerCase()
switch (month){
    case 'september':
        console.log('it is currently Autumn')
        break
    case 'october':
        console.log('it is currently Autumn')
        break
    case 'november':
        console.log('it is currently Autumn')
        break
    case 'december':
        console.log('it is winter')
        break
    case 'january':
        console.log('it is winter')
        break
    case 'february':
        console.log('it is winter')
        break
    case 'march':
        console.log('spring')
        break
    case 'april':
        console.log('spring')
        break
    case 'may':
        console.log('spring')
        break
    case 'june':
        console.log('summer')
        break
    case 'july':
        console.log('summer')
        break
    case 'august':
        console.log('summer')
        break
    default:
        console.log('forgot to put a correctly spelt month')

}
*/
/*
const monthInput = prompt('enter a month','exp.august')
function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const daysInSeptember =getDaysInMonth(2022,9);
const daysInOctober =getDaysInMonth(2022,10);
const daysInNovember =getDaysInMonth(2022,11);
const daysInDecember =getDaysInMonth(2022,12);
const daysInJanuary =getDaysInMonth(2022,1);
const daysInFebruary =getDaysInMonth(2022,2);
const daysInMarch =getDaysInMonth(2022,3);
const daysInApril =getDaysInMonth(2022,4);
const daysInMay =getDaysInMonth(2022,5);
const daysInJune =getDaysInMonth(2022,6);
const daysInJuly =getDaysInMonth(2022,7);
const daysInAugust =getDaysInMonth(2022,8);
switch (month){
    case 'september':
        console.log(daysInSeptember,"days in this month")
        break
    case 'october':
        console.log(daysInOctober,"days in this month")
        break
    case 'november':
        console.log(daysInNovember,"days in this month")
        break
    case 'december':
        console.log(daysInDecember,"days in this month")
        break
    case 'january':
        console.log(daysInJanuary,"days in this month")
        break
    case 'february':
        console.log(daysInFebruary,"days in this month")
        break
    case 'march':
        console.log(daysInMarch,"days in this month")
        break
    case 'april':
        console.log(daysInApril,"days in this month")
        break
    case 'may':
        console.log(daysInMay,"days in this month")
        break
    case 'june':
        console.log(daysInJune,"days in this month")
        break
    case 'july':
        console.log(daysInJuly,"days in this month")
        break
    case 'august':
        console.log(daysInAugust,"days in this month")
        break
    default:
        console.log('forgot to put a correctly spelt month')

} 
*/

const months = ["january", "february", "march", "april", "may", "june", " july", "august", "september", "october", "november", "december"]
let monthInput = prompt('Input a month exp: February').toLowerCase();
const currentYear =  new Date().getFullYear();
const monthNum = months.indexOf(monthInput) + 1
const daysInMonth = new Date(currentYear, monthNum, 0).getDate();


console.log(`There are ${daysInMonth} days in the month of ${months[monthNum - 1]}`)

function checkLeapYear(year, month) {
    (new Date(year, month, 0).getDate() === 29) ? console.log(year + ' is a leap year') : console.log(year + ' is not a leap year')
}

checkLeapYear(currentYear, monthNum);
