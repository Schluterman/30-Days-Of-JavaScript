//Level One 
//Q1
/*
Foreach takes a callback function and run that callback function on each element of array one by one.
Basically forEach works as a traditional for loop looping over the array and providing you array elements to do operations on them.
The main difference between forEach and filter is that forEach just loop over the array and executes the callback but filter executes the callback and check its return value.
Also take notice filter does not update the existing array it will return a new filtered array every time.
Map makes it unique is it generate a new array based on your existing array.
reduce the array to one single value.
*/
//Q2 Call back function calls back to the parent function
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//Q3
countries.forEach((country, i) => {  
    console.log(`${i} : ${country}`);  
});
//Q4
names.forEach((name, i) => {
    console.log(`${i} : ${name}`)
});
//Q5
numbers.forEach((number,i) =>{
    console.log(`${i} : ${number}`)
});
//Q6
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)
//Q7
const countriesLength = countries.map((country) => countries.length)
console.log(countriesLength);
//Q8
const numberSquared = numbers.map((number)=> number * number)
console.log(numberSquared);
//Q9
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)
//Q10
const productPrices = products.map((price) => price.price )
console.log(productPrices)
//Q11
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)
//Q12
const result = countries.find((name) => name.length = 6)
console.log(result)
//Q13
const result2 = countries.find((name) => name.length >= 6)
console.log(result2)
//Q14
const countriesStartsWithE = countries.filter((country) => country.startsWith('E'))
console.log(countriesStartsWithE)
//Q15
//Same Code as Question 10 
//Q16  --NO Clue 
function getStringOfArray (countries){
    const country = (countries);
    console.log(country);
}
//Q17
const sum = numbers.reduce((acc,cur) => acc + cur, 0)
console.log(sum)
//Q18 skipping 
//Q19 
//some() method will return true if any predicate is true while every() method will return true if all predicates are true.
//Q20 
const namesLongerthenseven = names.some((name)=> names.length > 7)
console.log(namesLongerthenseven)
//Q21
const landcountries = countries.every((country)=> country.includes('land'))
console.log(landcountries);
//Q22 the find method returns the element value, but the findIndex method returns the element index
//Q23
const find = countries.find ((find) => find.length = 6)
console.log(find)
//Q24
const findIndex = countries.findIndex ((find) => find.length = 6)
console.log(findIndex)
//Q25
const findNorway = countries.findIndex ((find)=>'Norway')
console.log(findNorway)
//Q26
const findRussia = countries.findIndex((find)=> 'Russia')
console.log(findRussia)

//Lvl 2 
