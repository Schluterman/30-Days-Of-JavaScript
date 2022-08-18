const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
let c = [...a, ...b]
const countries = ['Finland', 'Sweden', 'Norway','Russia','USA']
//Q1
//const empty = new set ()
//console.log(empty)
//Q2
const numbers = [1,2,3,4,5,6,7,8,9,10]
setOfNumbers = new Set()
for(const num of numbers){
    setOfNumbers.add(numbers)
}
//Q3
const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}
console.log(companies.delete('Google'))
console.log(companies.size)

//Q4
numbers.clear()
console.log(numbers)
//Q5 Create a set of 5 string elements from array
const setOfCountries = new Set (countries)
for (const listOfCountries of setOfCountries){
    console.log(listOfCountries)
}
//Q6
const map = new Map(countries)
for (const lengthOfChr of map){
    countries.length
    console.log(lengthOfChr)
}



let A = new Set(a)
let B = new Set(b)
let C = [new Set (c)]

console.log(C)

let cc = a.filter((num)=>B.has(num))
let CC = new set (cc)
console.log(CC)
