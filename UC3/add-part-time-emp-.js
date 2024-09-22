// UC3 : Add Part-Time Employee & Wage

const PART_TIME_HOURS = 4;

// Randomly decide between absent, full-time or part-time
const employee_type = Math.floor(Math.random() * 3); // 0, 1, 2

let workingHours = 0;
if (employee_type === 1) {
    workingHours = FULL_DAY_HOURS;
    console.log("Employee is full-time.");
} else if (employee_type === 2) {
    workingHours = PART_TIME_HOURS;
    console.log("Employee is part-time.");
} else {
    workingHours = 0;
    console.log("Employee is absent.");
}

const dailyWage = workingHours * WAGE_PER_HOUR;
console.log(`Daily Wage: $${dailyWage}`);