import { reverseString, capitalize } from "../utils/stringUtils.ts";
import { Finance } from "../utils/finance.ts";
import { UserManagement } from "../utils/userManagement.ts";
import {
  generateFibonacci,
  generatePrimeNumbers,
} from "../utils/sequenceUtils.ts";
//1
console.log(reverseString("строка"));
console.log(capitalize("строка string"));
//2
const loanPrincipal = 100000;
const annualRate = 7;
const loanTerm = 5;

const monthlyPayment = Finance.LoanCalculator.calculateMonthlyPayment(
  loanPrincipal,
  annualRate,
  loanTerm,
);

console.log(`ежемесячный платёж: ${monthlyPayment.toFixed(2)}`);

const annualIncome = 500000;
const taxRate = 13;

const incomeTax = Finance.TaxCalculator.calculateIncomeTax(
  annualIncome,
  taxRate,
);

console.log(`налог на доход: ${incomeTax.toFixed(2)}`);
//3
const admin = new UserManagement.Admin.UserAdmin(
  "Alice",
  "alice@gmail.com",
  false,
);
console.log("before: ", admin.getUserInfo());
admin.setSuperAdminStatus(true);
console.log("after: ", admin.getUserInfo());
//4
const fib: number[] = generateFibonacci(5);
console.log(fib);
const primeGen: number[] = generatePrimeNumbers(100);
console.log(primeGen);
