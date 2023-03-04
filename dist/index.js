"use strict";
let mySize = "md";
console.log(mySize);
function predictIncome(age, experience) {
    let income = "";
    if (age > 24 && age < 30 && experience <= 2) {
        income = "100,000";
    }
    else if (age > 30 && experience >= 7) {
        income = "300,000";
    }
    return income;
}
const _income = predictIncome(31, 8);
console.log({ _income });
