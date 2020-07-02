let mercuryDaysYear = 88;
let venusDaysYear = 225;
let earthDaysYear = 365;
let marsDaysYear = 687;
let jupiterDaysYear = 4333;
let saturnDaysYear = 10759;
let uranusDaysYear = 30678;
let neptuneDaysYear = 60190;
let lifeExpectancy = 79;

export class Me {
  constuctor(age, ageEarthYears, ageEarthDays, ageMercuryYears, ageVenusYears, ageMarsYears, ageJupiterYears, ageSaturnYears, ageUranusYears, ageNeptuneYears, lifeExpectancyRemainingEarthYears, lifeExpectancyRemainingMercuryYears) {
  this.age = age;
  this.ageEarthYears = age;
  this.ageEarthDays = ageEarthYears *  earthDaysYear;
  this.ageMercuryYears = Math.floor((ageEarthDays / mercuryDaysYear));
  this.ageVenusYears = Math.floor((ageEarthDays / venusDaysYear));
  this.ageMarsYears = Math.floor((ageEarthDays / marsDaysYear));
  this.ageJupiterYears = Math.floor((ageEarthDays / jupiterDaysYear));
  this.ageSaturnYears = Math.floor((ageEarthDays / saturnDaysYear));
  this.ageUranusYears = Math.floor((ageEarthDays / uranusDaysYear));
  this.ageNeptuneYears = Math.floor((ageEarthDays / neptuneDaysYear));
  this.lifeExpectancyRemainingEarthYears = (lifeExpectancy - age);
  this.lifeExpectancyRemainingMercuryYears = Math.floor(((lifeExpectancy - age)*earthDaysYear)/mercuryDaysYear);
  this.lifeExpectancyRemainingVenusYears = Math.floor(((lifeExpectancy - age)*earthDaysYear)/venusDaysYear);
  this.lifeExpectancyRemainingMarsYears = Math.floor(((lifeExpectancy - age)*earthDaysYear)/marsDaysYear);
  this.lifeExpectancyRemainingJupiterYears = Math.floor(((lifeExpectancy - age)*earthDaysYear)/jupiterDaysYear);
  this.lifeExpectancyRemainingSaturnYears = Math.floor(((lifeExpectancy - age)*earthDaysYear)/saturnDaysYear);
  this.lifeExpectancyRemainingUranusYears = Math.floor(((lifeExpectancy - age)*earthDaysYear)/uranusDaysYear);
  this.lifeExpectancyRemainingNeptuneYears = Math.floor(((lifeExpectancy - age)*earthDaysYear)/neptuneDaysYear);
}