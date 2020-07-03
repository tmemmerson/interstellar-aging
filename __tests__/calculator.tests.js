import{ Me } from '../src/calculator'
describe(Me, () => {

  test('age should be set to 32', () => {
    const me = new Me(32);
    expect(me.age).toBe(32);
  });
  test('ageEarthYears should be set to 32', () => {
    const me = new Me(32);
    const age = 32;
    expect(me.ageEarthYears).toBe(32);
  });
  test('ageEarthDays should be set to 11,680', () => {
    const me = new Me (32)
    me.calculateAgeEarthDays();
    expect(me.ageEarthDays).toBe(11680);
  });
  test('ageMercuryYears should be equal to 132', () => {
    const me = new Me (32)
    me.calculateAgeEarthDays();
    me.calculateAgeMercuryYears();
    expect(me.ageMercuryYears).toBe(132);
  });
  test('ageVenusYears should be equal to 51', () => {
    const me = new Me (32)
    me.calculateAgeVenusYears();
    expect(me.ageVenusYears).toBe(51);
  });
  test('ageMarsYears should be equal to 17', () => {
    const me = new Me (32)
    me.calculateAgeMarsYears();
    expect(me.ageMarsYears).toBe(17);
  });
  test('ageJupiterYears should be equal to 2', () => {
    const me = new Me (32)
    me.calculateAgeJupiterYears();
    expect(me.ageJupiterYears).toBe(2);
  });
  test('ageSaturnYears should be equal to 2', () => {
    const me = new Me (32)
    me.calculateAgeSaturnYears();
    expect(me.ageSaturnYears).toBe(1);
  }); 
  test('ageUranusYears should be equal to 0', () => {
    const me = new Me (32)
    me.calculateAgeUranusYears();
    expect(me.ageUranusYears).toBe(0);
  });
  test('ageNeptuneYears should be equal to 0', () => {
    const me = new Me (32)
    me.calculateAgeNeptuneYears();
    expect(me.ageNeptuneYears).toBe(0);
  });
  test('lifeExpectancyEarthYears should be equal to 47', () => {
    const me = new Me (32)
    me.calculateLifeExpectancyEarthYears();
    expect(me.lifeExpectancyEarthYears).toBe(47);
  });
  test('lifeExpectancyMercuryYears should be equal to 194', () => {
    const me = new Me (32)
    me.calculateLifeExpectancyMercuryYears();
    expect(me.lifeExpectancyMercuryYears).toBe(194);
  });
  test('lifeExpectancyVenusYears should be equal to 76', () => {
    const me = new Me (32)
    me.calculateLifeExpectancyVenusYears();
    expect(me.lifeExpectancyVenusYears).toBe(76);
  });
  test('lifeExpectancyMarsYears should be equal to 24', () => {
    const me = new Me (32)
    me.calculateLifeExpectancyMarsYears();
    expect(me.lifeExpectancyMarsYears).toBe(24);
  });
  test('lifeExpectancyJupiterYears should be equal to 3', () => {
    const me = new Me (32)
    me.calculateLifeExpectancyJupiterYears();
    expect(me.lifeExpectancyJupiterYears).toBe(3);
  });
  test('lifeExpectancySaturnYears should be equal to 1', () => {
    const me = new Me (32)
    me.calculateLifeExpectancySaturnYears();
    expect(me.lifeExpectancySaturnYears).toBe(1);
  });
  test('lifeExpectancyUranusYears should be equal to 0', () => {
    const me = new Me (32)
    me.calculateLifeExpectancyUranusYears();
    expect(me.lifeExpectancyUranusYears).toBe(0);
  });
  test('lifeExpectancyNeptuneYears should be equal to 0', () => {
    const me = new Me (32)
    me.calculateLifeExpectancyNeptuneYears();
    expect(me.lifeExpectancyNeptuneYears).toBe(0);
  });
});
