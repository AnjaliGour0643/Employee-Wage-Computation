// UC5: Calculate Wages for a Month

const WORKING_DAYS_PER_MONTH = 20;

let totalWage = 0;

for (let day = 1; day <= WORKING_DAYS_PER_MONTH; day++) {
    const employee_type = Math.floor(Math.random() * 3); // 0, 1, 2
    let workingHours = 0;

    switch (employee_type) {
        case 1:
            workingHours = FULL_DAY_HOURS;
            console.log(`Day ${day}: Employee is full-time.`);
            break;
        case 2:
            workingHours = PART_TIME_HOURS;
            console.log(`Day ${day}: Employee is part-time.`);
            break;
        default:
            workingHours = 0;
            console.log(`Day ${day}: Employee is absent.`);
    }

    const dailyWage = workingHours * WAGE_PER_HOUR;
    totalWage += dailyWage;
    console.log(`Day ${day}: Daily Wage = $${dailyWage}`);
}

console.log(`Total Wage for the Month: $${totalWage}`);
