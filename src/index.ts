// let numArr: [number, string, boolean] = [1, "a", true];

const enum Size {
  Small = "sm",
  Medium = "md",
  Large = "lg",
}

let mySize: Size = Size.Medium;
console.log(mySize);

function predictIncome(age: number, experience: number): string {
  let income: string = "";
  if (age > 24 && age < 30 && experience <= 2) {
    income = "100,000";
  } else if (age > 30 && experience >= 7) {
    income = "300,000";
  }
  return income;
}

const _income: string = predictIncome(31, 8);
console.log({ _income });
