export class Me {
  constuctor(age) {
    this.age = age;
    this.ageEarthYears = age;
    this.lifeExpectancy = 79;
  }
    calculateAgeEarthDays() {
      const earthDaysYear = 365;
      this.ageEarthDays = age * earthDaysYear;
    }
    calculateAgeMercuryYears() {
      const mercuryDaysYear = 88;
      this.ageMercuryYears = Math.floor((ageEarthDays * age / mercuryDaysYear));
    }
    calculateAgeVenusYears() {
      const venusDaysYear = 225;
      ageVenusYears = Math.floor((ageEarthDays * age / venusDaysYear))
    }
    calculateAgeMarsYears() {
      const marsDaysYear = 687;
      ageMarsYears = Math.floor((ageEarthDays * age / marsDaysYear));
    }
    calculateAgeJupiterYears() {
      const jupiterDaysYear = 4333;
      ageJupiterYears = Math.floor((ageEarthDays * age / jupiterDaysYear));
    }
    calculateAgeSaturnYears() {
      const saturnDaysYear = 10759;
      ageSaturnYears = Math.floor((ageEarthDays * age / saturnDaysYear));
    }
    calculateAgeUranusYears() {
      const uranusDaysYear = 30678;
      ageUranusYears = Math.floor((ageEarthDays * age / uranusDaysYear));
    }
    calculateAgeNeptuneYears() {
      const neptuneDaysYear = 60190;
      ageNeptuneYears = Math.floor((ageEarthDays * age / neptuneDaysYear));
    }
    calculateLifeExpectancyEarthYears() {
      lifeExpectancyEarthYears = lifeExpectancy - age;
    }
    calculateLifeExpectancyMercuryYears() {
      const mercuryDaysYear = 88;
      const earthDaysYear = 365;
      lifeExpectancyMercuryYears = Math.floor((lifeExpectancy - age) * earthDaysYear / mercuryDaysYear);
    }
    calculateLifeExpectancyVenusYears() {
      const venusDaysYear = 225;
      const earthDaysYear = 365;
      lifeExpectancyVenusYears = Math.floor((lifeExpectancy - age) * earthDaysYear / venusDaysYear);
    }
    calculateLifeExpectancyMarsYears() {
      const marsDaysYear = 687;
      const earthDaysYear = 365;
      lifeExpectancyMarsYears = Math.floor((lifeExpectancy - age) * earthDaysYear / marsDaysYear);
    }
    calculateLifeExpectancyJupiterYears() {
      const jupiterDaysYear = 4333;
      const earthDaysYear = 365;
      lifeExpectancyJupiterYears = Math.floor((lifeExpectancy - age) * earthDaysYear / jupiterDaysYear);
    }
    calculateLifeExpectancySaturnYears() {
      const saturnDaysYear = 10759;
      const earthDaysYear = 365;
      lifeExpectancySaturnYears = Math.floor((lifeExpectancy - age) * earthDaysYear / saturnDaysYear);
    }
    calculateLifeExpectancyUranusYears() {
      const uranusDaysYear = 30678;
      const earthDaysYear = 365;
      lifeExpectancyUranusYears = Math.floor((lifeExpectancy - age) * earthDaysYear / uranusDaysYear);
    }
    calculateLifeExpectancyNeptuneYears() {
      const neptuneDaysYear = 60190;
      const earthDaysYear = 365;
      lifeExpectancyNeptuneYears = Math.floor((lifeExpectancy - age) * earthDaysYear / neptuneDaysYear);
    }
}