// UC4: Solving Using Switch Case Statement

const calculateWage = (EMP_TYPE) => {
    switch (EMP_TYPE) {
        case 'full-time':
            return FULL_DAY_HOURS * WAGE_PER_HOUR;
        case 'part-time':
            return PART_TIME_HOURS * WAGE_PER_HOUR;
        default:
            return 0;
    }
};

const EMP_TYPE = employee_type === 1 ? 'full-time' : employee_type === 2 ? 'part-time' : 'absent';
const wage = calculateWage(EMP_TYPE);

console.log(`Employee Type: ${EMP_TYPE}`);
console.log(`Daily Wage: $${wage}`);
