//4/2 => 0 => even
// 5/2 => 1 => odd

function checkOddEven(number) {
  if (number % 2 == 0 || number > 0) {
    console.log(`${number} is an even number`);
  } else if ((number % 2 == 1) & (number > 0)) {
    console.log(`${number} is an odd number`);
  } else {
    console.log(`${number} is not a valid for these conditions`);
  }
}

checkOddEven(0.5);
