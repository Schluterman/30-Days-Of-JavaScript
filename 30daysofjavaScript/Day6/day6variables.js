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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  /*
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
for (let i = 10; i >=0; i--){
    console.log(i);
}
let n =2;
for (let i = 0; i <=n; i++){
    console.log(i);
}
for (var i=0; i<=4; i++){
    for(j=0;j<=i;j++){
        document.write("#");
    }
    document.write("</br>");
}
for (let i =0; i<=10; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}
for (let i=0; i<=10; i++){
    console.log(`${i} = ${i * i} = ${i * i * i}`)
}

for ( i=0; i<=100;i++){
    if(i ===0){
        console.log(i+"is even")
    }
    else if (i % 2 ===0){
        console.log(i + "is even")
    } else{
        console.log(i+"is odd")
    }
}
*/
for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}
let sum = 0;
for (i=1; i<=100;i++){
sum=sum+i
console.log(sum);
}
for(i=1;i<=100;i++) //for even numbers 
{
  if(i%2==0)
  {
    sum=sum+i
  }
}
console.log(sum)

let sumE = 0
let sumO = 0

// You could technically start at 1 here
for (let i = 0; i <= 100; i++) {
  // Just add the numbers without using arrays
  if (i % 2 == 0) {
    sumE += i
  } else {
    sumO += i
  }
}

console.log(sumE, sumO)
//lvl q13 
var arr = [];
while(arr.length < 5){
  var r = Math.floor(Math.random() * 100) + 1;
  if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(5));

const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

console.log(random_hex_color_code())

function random_bg_color(){
  var x = Math. floor(Math. random() * 256);
  var y = Math. floor(Math. random() * 256);
  var z = Math. floor(Math. random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
}
const upper = countries.map(element =>{
  return element.toUpperCase()
});
console.log(upper);
//LVL 2 Question 6
console.log(countries.map(w => w.length));
let abr = countries.map(countries => countries.substring(0,3))
let abrivatationCap = (abr.toUpperCase);
let countriesLength = countries.length
console.log()// idk how to display each array into a multi column array 
// LVL 2 Question 7 
const newArray = countries.filter(country => 
  country.includes('land'))
  console.log(newArray);
  const newArrayforAi = countries.filter(country =>
    country.includes('ia'))
    console.log(newArrayforAi);
    function findLongestWordLength(countries) {
      return Math.max(...countries.split(' ').map(word => word.length));
    }
    console.log(findLongestWordLength);
    