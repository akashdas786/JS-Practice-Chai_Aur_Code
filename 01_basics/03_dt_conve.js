let score = "33abc"  // throw NaN 

console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof(valueInNumber));

console.log(valueInNumber);



// "33" easily convert into 33 but "33abc" throw the value NaN

// true => 1 and false => 0

let IsLoggedIn = "Subrata Das"

let booleanIsLoggedIn = Boolean(IsLoggedIn)

console.log(booleanIsLoggedIn);

// 1=> true 
// "" => false 
// "Subrata Das" => true

let someNumber =33

let changeNumber = String(someNumber)

console.log( typeof changeNumber);