//Create a function that takes the age in years and returns the age in days.

function calcAge(years) {
  const daysAge = 365 * years;
  return daysAge;
}

const result = calcAge(37);
console.log(result);
