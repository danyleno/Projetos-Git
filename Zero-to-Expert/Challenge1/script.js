const patient1 = "Mark"
const patient2 = "John"
const massMark = 78
const massJohn = 92
const heightMark = 1.69
const heightJohn = 1.95
const bmiMark = massMark / heightMark ** 2
const bmiJohn = massJohn / heightJohn ** 2
if(bmiMark > bmiJohn){
    console.log(`${patient1} BMI(${bmiMark}) is higher than ${patient2} BMI(${bmiJohn})`)
} else{
    console.log(`${patient2} BMI(${bmiJohn}) is higher than ${patient1} BMI(${bmiMark})`)
}
console.log(bmiMark, bmiJohn)
