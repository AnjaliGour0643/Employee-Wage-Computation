// UC6: Calculate Wages Till Condition of Total Working Hours or Days Is Reached

const MAX_WORKING_HOURS = 100;
const WORKING_DAYS_PER_MONTH = 20;

let totalWage = 0;
let totalWorkingHours = 0;
let totalWorkingDays = 0;

while (totalWorkingDays < WORKING_DAYS_PER_MONTH && totalWorkingHours < MAX_WORKING_HOURS) {
    totalWorkingDays++;
    const employee_type = Math.floor(Math.random() * 3); // 0, 1, 2
    let workingHours = 0;

    switch (employee_type) {
        case 1:
            workingHours = FULL_DAY_HOURS;
            console.log(`Day ${totalWorkingDays}: Employee is full-time.`);
            break;
        case 2:
            workingHours = PART_TIME_HOURS;
            console.log(`Day ${totalWorkingDays}: Employee is part-time.`);
            break;
        default:
            workingHours = 0;
            console.log(`Day ${totalWorkingDays}: Employee is absent.`);
    }

    // Check if adding these hours exceeds the maximum
    if (totalWorkingHours + workingHours > MAX_WORKING_HOURS) {
        workingHours = MAX_WORKING_HOURS - totalWorkingHours;
    }

    totalWorkingHours += workingHours;
    const dailyWage = workingHours * WAGE_PER_HOUR;
    totalWage += dailyWage;
    console.log(`Day ${totalWorkingDays}: Working Hours = ${workingHours}, Daily Wage = $${dailyWage}`);
}

console.log(`Total Wage for the Month: $${totalWage}`);
console.log(`Total Working Hours: ${totalWorkingHours}`);
console.log(`Total Working Days: ${totalWorkingDays}`);
