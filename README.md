# Utility Calculation Scripts

A collection of standardized mathematical algorithms used for finance, HR, and health calculations. This repository hosts the core logic engines that power the [InterCalculator.com](https://intercalculator.com) platform.

## Current Module: Absence Rate Calculator

This module (`absence_logic.js`) provides a pure JavaScript implementation of the standard HR Absence Rate formula. It is designed to be lightweight and dependency-free for developer use.

### Formula Used
$$
\text{Absence Rate} = \left( \frac{\text{Total Days Absent}}{\text{Total Employees} \times \text{Total Workdays}} \right) \times 100
$$

### Usage
```javascript
const { calculateAbsenceRate } = require('./absence_logic');

// Calculate for 50 employees, 22 work days, 15 absent days
const rate = calculateAbsenceRate(50, 22, 15);
console.log(rate.results.absencePercentage); // Output: 1.36%
