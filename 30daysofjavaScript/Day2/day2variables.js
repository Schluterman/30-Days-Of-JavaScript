//EXERCISE LEVEL ONE
//
let string= '30 Days of JavaScript'; //declare challenge variable 
let challenge = string; //set the string to 30 Days of JavaScript
console.log(string); //print the string out
console.log(string.length); //print the length of the string 
console.log(string.toUpperCase); //prints and changes the string to UpperCase
console.log(string.toLowerCase); //prints and changes the string to LowerCase
console.log(string.substring(3,21)); //cut out the 30 and leave Days of JavaScript
console.log(string.substring(0,3)); //slice out the Days of JavaScript 
console.log(string.includes('Script')); //check to see if the string includes 'Script'
console.log(string.split()); // split the string into an array 
console.log(string.split(' ')); //split the string with space
let brands =  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(brands.split(',')); //split to any array at comma 
console.log(string.replace('JavaScript','Python')); //swap out JavaScript with Python 
console.log(string.charAt(15)); //what is the character at index 15 
console.log(string.charCodeAt('J')); //gets the charCodeAt of 72 for J 
console.log(string.indexOf('a')); //tells the position of the first instant of 'a'
console.log(string.lastIndexOf('a')); //tells the position of the last instant of 'a'
let findWord = 'You cannot end a sentence with because because because is a conjunction';
console.log(findWord.indexOf('because')); // find the position of the first instant of the word because 
console.log(findWord.lastIndexOf('because'));//find the position of the last instant of the word because
console.log(findWord.search('because')); //using the search function to find the position of the first instant of the word because 
console.log(string.trim()); // removes all white space from the beginning and the end of the string
console.log(string.startsWith('30'));  //make statment = to true 30 is the start of the string 
console.log(string.endsWith('t')); //checks to see if t is what the string ends with if so its true if not false 
console.log(string.endsWith("3")); //example of the statement being false 
let pattern = /a/gi; //targets the letter a 
console.log(string.match(pattern));  //display all instantces of the letter 
let title = '30';
console.log(title.concat("Days","of","JavaScript")); // join all strings togther 
console.log(string.repeat(2)); //repeats the string twice 
//
//EXERCISE LEVEL TWO 
let quoteOne = '"There is no exercise better for the heart than reaching down and lifting people up." by John Holmes teaches us to help one another.'
console.log(quoteOne);
let quoteTwo = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(quoteTwo);
let num ='10';
let numInt = Number(num);
console.log(numInt);

console.log(parseFloat('9.8'));
console.log(Math.round('9.8'));//Not sure if this is correct method 

let Python = 'python';
let jargon = 'jargon';
console.log(Python.includes('on'));
console.log(jargon.includes('on'));
console.log('I hope this course is not full of jargon.'.includes('jargon'));
const randNum = Math.floor(Math.random () *101);
console.log(randNum);
const rand = Math.floor(Math.random(50)*256);
console.log(rand);
const randThree = Math.floor(Math.random()*256);
console.log(randThree);
//Question 10 idk
let stringTwo = 'JavaScript';
let sti = stringTwo.charAt(Math.floor(Math.random()*stringTwo.length));
console.log(sti);
console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');
let q12 = 'You cannot end a sentence with because because because is a conjunction';
console.log(q12.slice(0,31) + q12.slice(54,100));

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let word = sentence.replace(/[^\w\s]/g, "") //  \w is word characters \s is whitespace chracters /g is for global search 
            .match(/\w+/g)
            .reduce((acc, word) => {
                acc[word] = (acc[word] || 0) + 1;
                if (!(acc[word] <= acc[acc.$])) acc.$ = [word];
                else if (acc[word] === acc[acc.$]) acc.$.push(word);
                return acc;
            }, {}).$;
            
console.log(word);

let newString ='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month';
let str = newString.match(/\d+/g);
let sum = str.reduce(function(total, num){  //Since the numbers are initially strings, we need to convert everything into a number using parseFloat(). This is so our reducer callback function can calculate the sum.
    return parseFloat(total) + parseFloat(num);
});
console.log(str);
console.log(sum);
