let mercuryDaysYear = 88;
let venusDaysYear = 225;
let earthDaysYear = 365;
let marsDaysYear = 687;
let jupiterDaysYear = 4333;
let saturnDaysYear = 10759
let uranusDaysYear = 30678
let neptuneDaysYear = 60190

export function Me (age, ageEarthYears, ageEarthDays, ageMercuryYears, ageVenusYears, ageMarsYears) {
  this.age = age;
  this.ageEarthYears = age;
  this.ageEarthDays = ageEarthYears *  earthDaysYear;
  this.ageMercuryYears = Math.floor((ageEarthDays / mercuryDaysYear));
  this.ageVenusYears = Math.floor((ageEarthDays / venusDaysYear));
  this.ageMarsYears = Math.floor((ageEarthDays / marsDaysYear));
}