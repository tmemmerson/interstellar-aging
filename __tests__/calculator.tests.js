import{ Me } from '../src/calculator.js'
import { TestScheduler } from 'jest'

describe('me', () => {
  test('age should be set to 32', () => {
    const me = new Me(32);
    expect(me.age).toEqual(32);
  });
  test('ageEarthYears should be set to 32', () => {
    const me = new Me(32);
    expect(me.ageEarthYears).toEqual(32);
  });
  test('ageEarthDays should be set to 11,680', () => {
    const me = new Me (32)
    expect(me.ageEarthDays).toEqual(11680);
  });
  test('ageMercuryYears should be equal to 132', () => {
    const me = new Me (32)
    expect(me.ageMercuryYears).toEqual(132);
  });
  test('ageVenusYears should be equal to 51', () => {
    const me = new Me (32)
    expect(me.ageVenusYears).toEqual(51);
  });
  test('ageMarsYears should be equal to 17', () => {
    const me = new Me (32)
    expect(me.ageMarsYears).toEqual(17);
  });
  test('ageJupiterYears should be equal to 2', () => {
    const me = new Me (32)
    expect(me.ageJupiterYears).toEqual(2);
  });
  test('ageSaturnYears should be equal to 2', () => {
    const me = new Me (32)
    expect(me.ageJupiterYears).toEqual(2);
  }); 
  test('ageUranusYears should be equal to 0', () => {
    const me = new Me (32)
    expect(me.ageUranusYears).toEqual(0);
  });
  test('ageNeptuneYears should be equal to 0', () => {
    const me = new Me (32)
    expect(me.ageNeptuneYears).toEqual(0);
  });
  test('lifeExpectancyEarthYears should be equal to 47', () => {
    const me = new Me (32)
    expect(me.calculateLifeExpectancyEarthYears).toEqual(47);
  });
  test('lifeExpectancyMercuryYears should be equal to 194', () => {
    const me = new Me (32)
    expect(me.calculateLifeExpectancyMercuryYears).toEqual(194);
  });
  test('lifeExpectancyVenusYears should be equal to 76', () => {
    const me = new Me (32)
    expect(me.calculateLifeExpectancyVenusYears).toEqual(76);
  });
  test('lifeExpectancyMarsYears should be equal to 24', () => {
    const me = new Me (32)
    expect(me.calculateLifeExpectancyMarsYears).toEqual(24);
  });
  test('lifeExpectancyJupiterYears should be equal to 3', () => {
    const me = new Me (32)
    expect(me.calculateLifeExpectancyJupiterYears).toEqual(3);
  });
  test('lifeExpectancySaturnYears should be equal to 1', () => {
    const me = new Me (32)
    expect(me.calculateLifeExpectancySaturnYears).toEqual(1);
  });
  test('lifeExpectancyUranusYears should be equal to 0', () => {
    const me = new Me (32)
    expect(me.calculateLifeExpectancyUranusYears).toEqual(0);
  });
  test('lifeExpectancyNeptuneYears should be equal to 0', () => {
    const me = new Me (32)
    expect(me.calculateLifeExpectancyNeptuneYears).toEqual(0);
  });
});