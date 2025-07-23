function car(carName, model) {
  this.name = carName;
  this.model = model;
}

const myCar = new car("Honda", "CRV");
console.log(myCar.model);
