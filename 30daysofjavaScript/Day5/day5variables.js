
  
  
  //const empty = [];
  const numbs = [0,1,2,3,4];
  const numberLength = (numbs.length);
  console.log(numbs[0]); //first item 
  console.log(numbs[2]); //middle item
  let lastIndex = numbs.length -1 //last item
  console.log(lastIndex);
const mixedDataTypes = [1, 'you','two',30,'me','all'];
console.log(mixedDataTypes.length);
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
console.log (itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);
console.log(itCompanies);
const upper = [];
itCompanies.forEach(element => {
  upper.push(element.toUpperCase());
});
console.log(upper);

console.log(itCompanies.join(),'are big IT companies');
let index = itCompanies.indexOf('Facebook');
let indexOfMaya = itCompanies.indexOf('maya');
if (indexOfMaya === -1){
  console.log('this iteam does not exist in the array')
} else {
  console.log('item does exist in the array');
}
itCompanies.splice()
console.log(itCompanies);

//lvl 1 q14 skip for now


/*
itCompanies.sort()
console.log(itCompanies);
itCompanies.reverse();
console.log(itCompanies);
itCompanies.splice(0,3);
console.log(itCompanies);


itCompanies.splice(-3);
console.log(itCompanies);

itCompanies.splice(3,1)
console.log(itCompanies);
*/
console.log(itCompanies.shift());
//remove middle item from array ? 
console.log(itCompanies.pop());
console.log(itCompanies = []);

//LEVEL TWO
/*
import {countries} from './countries';    Ask Skiba 
console.log(countries);
import{webTechs} from './web_techs';
console.log(webTechs);
*/
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/[^a-zA-Z ]/g, "");
const myArray = text.split(" ");
console.log(myArray);
console.log(myArray.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
console.log(shoppingCart.splice(0,4,));
console.log(shoppingCart.splice(0,3,"Green Tea"));

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
if (countries.includes('Ethiopia')){
  console.log('Ethiopia')
} else {
  countries.push('Ethiopia')
  console.log(countries)
}

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
if (webTechs.includes('Sass')){
  console.log('Sass is a CSS preprocess')
} else{
  webTechs.push('Sass');
}
console.log(webTechs);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd];
console.log(fullStack);

//Level Three 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
 
console.log(Math.min(...ages));
let min = Math.min(...ages);

console.log(Math.max(...ages));
let max = Math.max(...ages);
const median = Math.floor(ages.length / 2)
const average = ages.reduce((a,b)=> a + b, 0) / ages.length;
console.log(average);
const range = Math.max(...ages) - Math.min(...ages);
console.log(range);
let firstTen = countries.slice(0,10);
console.log(Math.abs(min - average));
console.log(Math.abs(max - average));

console.log(countries[Math.floor(countries.length/2)]);

const middleIndex = Math.ceil(countries.length/2);
const firstHalf = countries.splice(0, middleIndex);
const secoundHalf = list.splice(-middleIndex);
//not completly sure 