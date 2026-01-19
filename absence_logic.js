/**
 * Absence Rate Calculator Logic
 * Version: 1.0.0
 * License: MIT
 * * A lightweight utility to calculate employee absence percentages.
 * * Logic based on standard HR formula:
 * (Days Absent / (Total Employees * Workdays)) * 100
 */

function calculateAbsenceRate(totalEmployees, totalWorkDays, daysAbsent) {
    // 1. Input Validation
    if (totalEmployees <= 0 || totalWorkDays <= 0) {
        return {
            error: true,
            message: "Employees and Workdays must be greater than 0"
        };
    }

    if (daysAbsent < 0) {
        return {
            error: true,
            message: "Days absent cannot be negative"
        };
    }

    // 2. The Core Math
    const totalPossibleWorkDays = totalEmployees * totalWorkDays;
    const absenceRate = (daysAbsent / totalPossibleWorkDays) * 100;

    // 3. Return Structured Data
    return {
        success: true,
        inputs: {
            employees: totalEmployees,
            workDays: totalWorkDays,
            absent: daysAbsent
        },
        results: {
            totalPossibleDays: totalPossibleWorkDays,
            absencePercentage: parseFloat(absenceRate.toFixed(2)) // Rounded to 2 decimals
        }
    };
}

// Example Usage:
// const result = calculateAbsenceRate(50, 22, 15);
// console.log(result);
