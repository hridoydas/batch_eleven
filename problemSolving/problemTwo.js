// fibonacci
// 0 1 1 2 3 5 8 13 21 34 55

function fibonacci(number) {
  let num1 = 0;
  let num2 = 1;
  for (let i = 1; i <= number; i++) {
    console.log(num1);
    let result = num1 + num2;
    num1 = num2;
    num2 = result;
  }
}

fibonacci(15);
