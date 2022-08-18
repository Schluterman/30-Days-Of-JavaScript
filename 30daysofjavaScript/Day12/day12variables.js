//LvL 1
//Q1
let totalAnnual = (4000*12+(10000)+5500*12);
console.log(totalAnnual)
//Q2 remove -12, -4, -3 and -1 
points = ['-12','-4','-3','-1','0','4','8']
let f = points[0]
let l = points[points.length-1];
distance = (l-f);
console.log(distance)
//LVL 2
//Q1
let str = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(str))
function tenMostFrequentWords(str) {
    let words = str.match(/\w+/g);
    console.log(words); 
  
    let occurances = {};
  
    for (let word of words) {
      if (occurances[word]) {
        occurances[word]++;
      } else {
        occurances[word] = 1;
      }
    }
  
    console.log(occurances); 
  
    let max = 0;
    let mostRepeatedWord = '';
  
    for (let word of words) {
      if (occurances[word] > max) {
        max = occurances[word];
        mostRepeatedWord = word;
      }
    }
  
    return mostRepeatedWord;
  }
  //not sure how to get the top 10
  //Lvl 3
  
