//Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(countriesAPI).then(res => res.json().then(data => console.log(data))) //404 ERROR 

// LEVEL TWO:  Print out all the cat names in to catNames variable.
fetch(catsAPI).then(res => res.json().then(data => console.log(data)) )


