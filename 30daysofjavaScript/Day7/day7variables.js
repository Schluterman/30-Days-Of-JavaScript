//level One 
//Question ONE
    function fullName (){                                       
        let firstName = 'Preston'
        let lastName = 'Schluterman'
        let space = ' '
        let fullName = firstName + space + lastName
        return fullName
    }
console.log(fullName());

//Question Two
    function printFullName (firstName, lastName){               
        return `${firstName} ${lastName}`
    }
    console.log(printFullName('Preston','Schluterman'));

//Question Three
    function addNumbers (parm1, parm2){                         
        let sum = parm1 + parm2;
        console.log(sum) 
    }
    addNumbers(10,20);
//Question Four
//rectangle  area = length x width.                         
    function areaOfRectangle (length, width){
        let area = length * width 
        console.log(area)
    }
    areaOfRectangle(10,10)

//Question Five
//perimeter= 2x(length + width)
    function perimeterOfRectangle (length,width){
        let perimeter = 2*(length + width)
        console.log(perimeter)
    }
    perimeterOfRectangle(10,10)

//Question Six
function volumeOfRectPrism (length, width, height){
    let volume = length * width * height 
    console.log(volume)
}
volumeOfRectPrism(2,3,10)

//Question Seven
function areaOfCircle (radius){
    let area = Math.PI * radius * radius
    return area;
}
console.log(areaOfCircle(10))

//Question Eight
function circumfranceOfCircle (radius){
    let circumfrance = 2* Math.PI *radius
    return circumfrance
}
console.log(circumfranceOfCircle(5))

//question Nine 
function densityOfSubstance(mass, gravity = 9.81){
    let density = mass / gravity 
    return density
}
console.log(densityOfSubstance(100))

//Question Ten
function speedOfObject(totalDistanceCovered, time){
    let speed = totalDistanceCovered / time 
    return speed
} 
console.log(speedOfObject(1000,10))

//Question Eleven 
function weightOfObject (mass, gravity = 9.81){
    let weight = mass * gravity
    return weight
}
console.log(weightOfObject(10))

//Question Twelve 
function convertOctoOf (oC){
    let oF = (oC * 9/5)+32
    return oF
}
console.log(convertOctoOf(45))

//Question Thirteen
function BMI (weight,height){
    let bmi = (weight / ((height * height) 
    / 10000)).toFixed(2);
    if(bmi >=30){
        console.log('Obese')
    } else if (bmi >=25 && bmi <=29.9){
        console.log('Overweight')
    } else if(bmi >=18.5&& bmi<=14.9){
    console.log('Normal')
    } else if (bmi < 18.5) {
    console.log('Underweight')
    }
}
console.log(BMI(40, 170))

//Question Fourteen
let seasons = ['Autumn', 'Winter', 'Spring','Summer']
function checkSeason (seasons){
    return seasons[Math.floor(Math.random()* seasons.length)]
}
console.log(checkSeason(seasons));

//Question Fifteen 
function maxOfArray(array) {
    return Math.max.apply(Math, array);
  }
  
  
  let array = [1,2,3,4,5,6];
  console.log(maxOfArray(array)); //idk how to do this with out Math.max but this example shows it beening done with it 