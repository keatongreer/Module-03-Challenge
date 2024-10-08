// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let addedEmployees = [];
  let addingEmployees = true;
  while (addingEmployees) {
    let fNameInput = prompt(`Enter first name:`);
    let lNameInput = prompt(`Enter last name:`);
    let salaryInput = prompt(`Enter salary:`);
    
    // if salary input is not a number, set to $0
    if (isNaN(salaryInput)) {
      salaryInput = 0;
    }

    // create new employee object to be added to employees array
    const newEmployee = {
      firstName: fNameInput,
      lastName: lNameInput,
      salary: salaryInput,
    }    

    // add new employee object to employees array
    addedEmployees.push(newEmployee);

    // ask user if they want to add another employee; terminate loop if not
    if (!confirm(`Do you want to add another employee?`)) {
      addingEmployees = false;
    }
  }

  console.log('Employees Added:');
  console.log(addedEmployees);
  
  // return array of added employees
  return addedEmployees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // get the total salary of all employees
  let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += Number(employeesArray[i].salary);
  }

  // calculate and return average salary
  let avgSalary = (totalSalary / employeesArray.length);
  // if (Number.isInteger(avgSalary)) {
  //   console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${avgSalary}`);
  // } else {
  //   console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${}`);    
  // }
  console.log(avgSalary);
  
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${avgSalary.toFixed(2)}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  let selectedEmployee = employeesArray[randomIndex];
  console.log(`Congratulations to ${selectedEmployee.firstName} ${selectedEmployee.lastName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
