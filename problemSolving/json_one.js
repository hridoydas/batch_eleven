const car = [
  {
    name: "BMW",
    variation: {
      color: "black",
      wheel: "4",
      size: "4 seater",
      height: "2 meter",
      milege: "30KM/L",
    },
  },

  {
    name: "BMW",
    variation: {
      color: "black",
      wheel: "4",
      size: "4 seater",
    },
  },
  {
    name: "Honda",
    variation: {
      color: "black",
      wheel: "4",
      size: "4 seater",
    },
  },
  {
    name: "Hondai",
    variation: {
      color: "white",
      wheel: "4",
      size: "7 seater",
      height: "2.7 meter",
    },
  },
];
// problem_1: bmw color, wheel print
// problem_2: color=> black car=>name
// problem_3: color=> black id=>
// problem_4: if height print name

function jsonParse(data) {
  for (key in data) {
    // hasOwnProperty("property1")
    if (data[key].variation.hasOwnProperty("height")) {
      console.log(data[key].name);
    }
    // if (data[key].variation.height != undefined) {
    //   console.log(data[key].name);
    // }
  }
}

jsonParse(car);
