let lifeExpectancy = 79;

export class Me {
  constuctor(age) {
    this.age = age;
    this.ageEarthYears = age;
  }
    calculateAgeEarthDays() {
      const earthDaysYear = 365;
      ageEarthDays = age * earthDaysYear;
    }
    calculateAgeMercuryYears() {
      const mercuryDaysYear = 88;
      ageMercuryYears = ageEarthDays * age / mercuryDaysYear;
    }
    calculateAgeVenusYears() {
      const venusDaysYear = 225;
      ageVenusYears = ageEarthDays * age / venusDaysYear;
    }
    calculateAgeMarsYears() {
      const marsDaysYear = 687;
      ageMarsYears = ageEarthDays * age / marsDaysYear;
    }
    calculateAgeJupiterYears() {
      const jupiterDaysYear = 4333;
      ageJupiterYears = ageEarthDays * age / jupiterDaysYear;
    }
    calculateAgeSaturnYears() {
      const saturnDaysYear = 10759;
      ageSaturnYears = ageEarthDays * age / saturnDaysYear;
    }
    calculateAgeUranusYears() {
      const uranusDaysYear = 30678;
      ageUranusYears = ageEarthDays * age / uranusDaysYear;
    }
    calculateAgeNeptuneYears() {
      const neptuneDaysYear = 60190;
      ageNeptuneYears = ageEarthDays * age / neptuneDaysYear;
    }

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