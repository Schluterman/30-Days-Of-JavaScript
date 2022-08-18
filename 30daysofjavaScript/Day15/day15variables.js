class Person{
//creating a class in javaScript
constructor(firstName, lastName,age,city){ //passing the properties firstname and last name to class Person 
    console.log(this)
    this.firstName = firstName
    this.lastName = lastName
    //below are additional properties for the class Person
    this.age = age
    this.city = city 
}
}
const person = new Person() ///creates a new object from the class 
console.log(person)  
const person1 = new Person('Preston','Schluterman')//this will place the value for the property of 'firstname','lastname'
console.log(person1)
const person2 = new Person('mark','jones') //creating new person entries through adding value to the properties of the class
const person3 = new Person('megan','mayor')//exp 2
console.log(person2)
console.log(person3)
const person4 = new Person('joe','rain',25,'little Rock') //Reading left to right are the new values for the full properties list of fN,LN,age,city
console.log(person4)

//example of class with Default Propertie values 
class Coworker{
    constructor(
        firstName = 'Preston',
        lastName = 'schluterman',
        age = 25,
        city = 'little rock'

    ){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.city = city
    }
    

}
const coworker1 = new Coworker()//takes all defualt values 
const coworker3 = new Coworker('mark','rando',2,'mars')//assigns new values and replaces the original for the new Coworker 
console.log(coworker1)
console.log(coworker3)

//Adding Functions insdie of a Class
class Who{
    constructor(firstName,lastName,age,city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.city = city
        this.skills = []
    }
    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
// practicing get method
get getSkills(){
    return this.skills //instead of accessing properties directly we are using get method to return only the value of skills
}
//setter method allows us to modify a value of a property 
set setSkill(skill){
this.skills.push(skill)
}
getWhoInfo(){
    let fullName = this.getFullName()
    let skills = 
        this.skills.length > 0 && 
        this.skills.slice(0, this.skills.length -1).join(', ') + ` and ${this.skills[this.skills.length -1]}`
    let formattedSkills = skills ? `He knows ${skills}` : ''
    let info = `${fullName} is ${this.age}. He lives ${this.city}. ${formattedSkills}`
    return info 
}
}
const who1 = new Who('pie','fum',23,'rant')
console.log(who1.getFullName())//this console.log will target the newly created Who from the const who1 that has been creeated through the original class of Who and follow suit in running the function getFullName with the newly added values in the const who1
console.log(who1.skills) //this will find the defualt value of skill bc it wasnt changed in the const who1 
console.log(who1.getSkills)
who1.setSkill = 'HTML'
console.log(who1.skills)
who1.setSkill = 'marketing'
who1.setSkill = 'planning'
console.log(who1.getWhoInfo())

//LEVEL ONE 
//Q1 
class Animal {
    constructor(name,age,color,legs){
        this.name = 'rocky'
        this.age = 5
        this.color = 'gold'
        this.legs = 4
    }
    getFullInfo(){
        const fullInfo = this.name + ' ' + this.age + ' ' + this.color + ' ' + this.legs
        return fullInfo
    }
    get getName(){
        return this.name
    }
    set setAge(age){
        return this.age.push(age)
    }

}
//q2
class Dog extends Animal {
    constructor(name,age,color,legs){
        super(name,age,color,legs)
    }
    
}
class Cat extends Animal {
    constructor(name,age,color,legs){
        super(name,age,color,legs)
    }
}
const a1 = new Dog(
        'tiger',2,'brown',4
    )
console.log(a1)
