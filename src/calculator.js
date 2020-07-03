export class Me {
  constructor(age) {
    this.age = age;
    this.ageEarthYears = age;
    this.lifeExpectancy = 79;
    this.earthDaysYear = 365
  }
    calculateAgeEarthDays() {
      this.ageEarthDays = this.age * this.earthDaysYear;
    }
    calculateAgeMercuryYears() {
      const mercuryDaysYear = 88;
      this.ageMercuryYears = Math.floor((this.earthDaysYear * this.age / mercuryDaysYear));
    }
    calculateAgeVenusYears() {
      const venusDaysYear = 225;
      this.ageVenusYears = Math.floor((this.earthDaysYear * this.age / venusDaysYear))
    }
    calculateAgeMarsYears() {
      const marsDaysYear = 687;
      this.ageMarsYears = Math.floor((this.earthDaysYear * this.age / marsDaysYear));
    }
    calculateAgeJupiterYears() {
      const jupiterDaysYear = 4333;
      this.ageJupiterYears = Math.floor((this.earthDaysYear * this.age / jupiterDaysYear));
    }
    calculateAgeSaturnYears() {
      const saturnDaysYear = 10759;
      this.ageSaturnYears = Math.floor((this.earthDaysYear * this.age / saturnDaysYear));
    }
    calculateAgeUranusYears() {
      const uranusDaysYear = 30678;
      this.ageUranusYears = Math.floor((this.earthDaysYear * this.age / uranusDaysYear));
    }
    calculateAgeNeptuneYears() {
      const neptuneDaysYear = 60190;
      this.ageNeptuneYears = Math.floor((this.earthDaysYear * this.age / neptuneDaysYear));
    }
    calculateLifeExpectancyEarthYears() {
      this.lifeExpectancyEarthYears = this.lifeExpectancy - this.age;
    }
    calculateLifeExpectancyMercuryYears() {
      const mercuryDaysYear = 88;
      const earthDaysYear = 365;
      this.lifeExpectancyMercuryYears = Math.floor((this.lifeExpectancy - this.age) * this.earthDaysYear / mercuryDaysYear);
    }
    calculateLifeExpectancyVenusYears() {
      const venusDaysYear = 225;
      const earthDaysYear = 365;
      this.lifeExpectancyVenusYears = Math.floor((this.lifeExpectancy - this.age) * this.earthDaysYear / venusDaysYear);
    }
    calculateLifeExpectancyMarsYears() {
      const marsDaysYear = 687;
      const earthDaysYear = 365;
      this.lifeExpectancyMarsYears = Math.floor((this.lifeExpectancy - this.age) * this.earthDaysYear / marsDaysYear);
    }
    calculateLifeExpectancyJupiterYears() {
      const jupiterDaysYear = 4333;
      const earthDaysYear = 365;
      this.lifeExpectancyJupiterYears = Math.floor((this.lifeExpectancy - this.age) * this.earthDaysYear / jupiterDaysYear);
    }
    calculateLifeExpectancySaturnYears() {
      const saturnDaysYear = 10759;
      const earthDaysYear = 365;
      this.lifeExpectancySaturnYears = Math.floor((this.lifeExpectancy - this.age) * this.earthDaysYear / saturnDaysYear);
    }
    calculateLifeExpectancyUranusYears() {
      const uranusDaysYear = 30678;
      const earthDaysYear = 365;
      this.lifeExpectancyUranusYears = Math.floor((this.lifeExpectancy - this.age) * this.earthDaysYear / uranusDaysYear);
    }
    calculateLifeExpectancyNeptuneYears() {
      const neptuneDaysYear = 60190;
      const earthDaysYear = 365;
      this.lifeExpectancyNeptuneYears = Math.floor((this.lifeExpectancy - this.age) * this.earthDaysYear / neptuneDaysYear);
    }
}