// factorials
// 5! = 5*4*3*2*1 = 120
// 6! = 6*5*4*3*2*1 = 720

function factorials(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result = result * i;
  }

  console.log(`Factorial of ${number} is: ${result}`);
}

factorials(5);
