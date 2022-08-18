// syntax
document.getElementsByTagName('h1')


//-----------------------------------------------------------------------------------------
//Below gets all elements of li by tagname
const allItems = document.getElementsByTagName('li')

console.log(allItems) //HTMLCollections
console.log(allItems.length) // 4

for (let i = 0; i < allItems.length; i++) {//sets a for loop to acess each individual li 
  console.log(allItems[i]) // prints each elements in the HTMLCollection
}
//----------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------
//Below gets all elements of className
const allTitles = document.getElementsByClassName('title')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
//----------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------
//Below gets an element by ID
let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>
//---------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------
//querySelector: can be used to select HTML element by its tag name, id or class. 
//If the tag name is used it selects only the first element.
let firstH1 = document.querySelector('h1') // select the first available h1 element
let firstTitleID = document.querySelector('#first-title') // select id with first-title
let firstClassTitle = document.querySelector('.title') // select the first available element with class title
//---------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------
//Adding Style Color
//Let us add some style to our titles. If the element has even index we give it green color else red.
const titles = document.querySelectorAll('p')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) { //checks to see if its even 
    title.style.color = 'red' //if even change color to green
  } else {
    title.style.color = 'green' // if not change color to red 
  }
})
//--------------------------------------------------------------------------------------



//LEVEL ONE PRACTICE QUESTIONS 
//Q1-Get First Paragraph using document.quarySelector(tagname)
let firstParagraph = document.querySelector('p')
console.log(firstParagraph)
//Q2-Get each Paragraph by using document,quarySelector('#id')
let allParagraphs = document.querySelector('#above')
console.log(allParagraphs)
//Q3
let allPsAsNodeList = document.querySelectorAll('p')
//Q4
for (let i = 0; i < allPsAsNodeList.length; i++) {
  console.log(allPsAsNodeList[i].textContent) // prints each elements in the HTMLCollection
}
//Q5
titles[3].textContent = 'Fourth Paragraph'
//Q6-Set id and class attribute for all the paragraphs using different attribute setting methods
titles[0].id = 'paragraph-One'
titles[0].className = 'first-paragraph'
titles[1].classList.add('second-paragraph')
console.log(titles)
//LEVEL Two
//Q1-Change the style of each paragraph
titles.style.backgroundColor = 'yellow'
//Q2- Select all title and loop through them to give the 1st & 3rd color of green and 2nd & 3rd red 
//Solution from in book example writen on LINES 49 - 57
//q3- set text content, id and class Process to do so is 
titles.className.add('paragraph')
titles.id.add('ListedParagraphs')
titles.textContent= 'Hmmm'
