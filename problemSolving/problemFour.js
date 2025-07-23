// employee(name, month, baseSalary)
// employee("Tashrif", "March", 2000USD)

// The salary of Tashrif for the month Feb is 6000USD
// click, sendkeys, enter.key

class Employee {
  constructor(name, month, baseSalary) {
    this.name = name;
    this.month = month;
    this.salary = baseSalary;
  }
}

function getInfo(name, month, salary) {
  let totalSalary;
  //   if (month == "January") {
  //     totalSalary = 1 * salary;
  //   } else if (month == "February") {
  //     totalSalary = 2 * salary;
  //   }
  totalSalary =
    month == "January" ? 1 * salary : "Febaruary" ? 2 * salary : null;

  console.log(
    `The salary of ${name} for the month ${month} is ${totalSalary}USD`
  );
}

const empInfo = new Employee("Tashrif", "February", 3000);
getInfo(empInfo.name, empInfo.month, empInfo.salary);
