import { getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility } from './employee';

import Employee from './employee.js';

function getEmployeeInformation(salary) {
  Employee.salary = salary;
  console.log('Cadre: ' + getCadre());
  console.log('Tax: ' + calculateTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}


// tests
getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);