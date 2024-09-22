class EmployeeWageComputation {
    // Class variables
    static WAGE_PER_HOUR = 20;
    static FULL_DAY_HOUR = 8;
    static PART_TIME_HOUR = 4;
    static WORKING_DAYS_PER_MONTH = 20;
    static MAX_WORK_HOURS = 100;

    // Constructor to initialize employee details
    constructor() {
        this.totalWage = 0;
        this.totalWorkingDays = 0;
        this.totalWorkingHours = 0;
    }

    // Class method to get the working hours for full-time or part-time employee
    static getWorkHours(employeeType) {
        switch (employeeType) {
            case 'fullTime':
                return EmployeeWageComputation.FULL_DAY_HOUR;
            case 'partTime':
                return EmployeeWageComputation.PART_TIME_HOUR;
            default:
                return 0;
        }
    }

    // Class method to compute total wage for a month
    computeMonthlyWage() {
        while (this.totalWorkingDays < EmployeeWageComputation.WORKING_DAYS_PER_MONTH &&
               this.totalWorkingHours < EmployeeWageComputation.MAX_WORK_HOURS) {
                
            this.totalWorkingDays++;
            let workHours = EmployeeWageComputation.getWorkHours('fullTime'); // Example: full-time work
            this.totalWorkingHours += workHours;
            this.totalWage += workHours * EmployeeWageComputation.WAGE_PER_HOUR;
        }

        console.log(`Total Wage for the month: ${this.totalWage}`);
    }
}

// Create an instance of the class and compute the wage
let employeeWage = new EmployeeWageComputation();
employeeWage.computeMonthlyWage();
