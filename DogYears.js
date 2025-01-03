var myAge = parseInt(prompt('Insert your age:')) //human age
var earlyYears = 2 //first two year of the dog
earlyYears = earlyYears * 10.5
let lateYears = myAge - 2 //two yeasr that pass
lateYears *= 4

let myAgeInDogYears = earlyYears + lateYears
let myName = prompt('Insert your name:').toLocaleLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
)