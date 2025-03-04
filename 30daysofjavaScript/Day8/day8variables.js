//LEVEL ONE 
//Q1
//const dog = {};
//Q2
//console.log(dog);
//Q3
const dog = {
    name: 'rocky',
    color: 'brown',
    legs: 4,
    age: 5,
    bark:{
        return: 'woof woof',
    },
    getFulllist: function(){
        return `${this.name} ${this.legs} ${this.color} ${this.age} ${this.bark}`
    }
}
dog.breed ='lab'
dog.getDogInfo = dog.getFulllist;

//LVL Two
const userWithMaxSkills = users => Object.entries(users)
.reduce((res, [username, data]) => {
    if(data.skills.length > res.maxSkills){
      return {
        maxSkills: data.skills.length,
        user: {
          [username]: data
        }
      }
    }
    return res
}, 
 { 
  maxSkills: -1,
  user: undefined
 }
).user 
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
   
  }
  console.log(userWithMaxSkills(users)) 
  