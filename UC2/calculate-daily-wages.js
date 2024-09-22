// UC2: Calculate Daily Employee Wages

const WAGE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;

if (isEmployeePresent) {
    const dailyWage = WAGE_PER_HOUR * FULL_DAY_HOURS;
    console.log(`Employee is present. Daily Wage: $${dailyWage}`);
} else {
    console.log("Employee is absent. Daily Wage: $0");
}