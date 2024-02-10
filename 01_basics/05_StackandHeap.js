let myInstitution = "GeekDash"

let anotherName= myInstitution
anotherName = "GeekCreator"

console.log(myInstitution);
console.log(anotherName); //is use primitive datatype so data stores into Heap 

//Heap generate a copy so if we are changing anotherName it cahnges the copy data not the original one



let userOne={
email:"subratadas786420@gmail.com" ,
upi:"something@sbai"

}



let userTwo = userOne

userTwo.email="akashdas786420@gmail.com"


console.log(userOne);
console.log(userTwo);


//it uses Heap memory so when we are changing a value its automatically changes the original one