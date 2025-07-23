function fibonacci(number) {
  let series = [0, 1];
  for (let i = 2; i <= number; i++) {
    series[i] = series[i - 1] + series[i - 2];
    series.push(series[i]);
  }

  console.log(series);
}

fibonacci(15);

// prime => 5, 7, 4is not a prime
// "Hello"=> "olleH"
// 1234 => 4321
// int, string
// const data =
