'use strict';
let massInKg: number = 71.2;
let heightInM: number = 1.78;

// Print the Body mass index (BMI) based on these values
//BMI = weight (kg) ÷ height2 (m2)

let bmiIndex : number = Math.floor(massInKg / heightInM ** 2*100)/100;
console.log(`The BMI of a person who weights ${massInKg} kg and ${heightInM} meter tall is: ${bmiIndex}`);

//Evaluation of the result. Between 18.5 and 25 is normal.

if (bmiIndex <= 18.5) {
    console.log(`Based on the ${bmiIndex} BMI value this person is underweight. Eat more!`);    
} else if (18.5 < bmiIndex && bmiIndex<25) {
    console.log(`Based on the ${bmiIndex} BMI value this person is normal. Keep doing!`);    
} else {console.log(`Based on the ${bmiIndex} BMI value this person is obese. Do more sport and eat less!`);
    }