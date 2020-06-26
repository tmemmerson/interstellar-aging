import{ Me } from '../src/calculator.js'
import { TestScheduler } from 'jest'

describe('me', () => {

  test('age should be set to 32', () => {
    const me = new Me(32);
    expect(me.age).toEqual(32);
  });

  test('ageEarthYears should be set to 32', () => {
    const me = new Me(32, 32);
    expect(me.ageEarthYears).toEqual(32);
  });

  test('ageEarthDays should be set to 11,680', () => {
    const me = new Me (32, 32)
    expect(me.ageEarthDays).toEqual(11680);
  });

  test('ageMercuryYears should be equal to 132', () => {
    const me = new Me (32, 32, 11680)
    expect(me.ageMercuryYears).toEqual(132);
  });
  
  test('ageVenusYears should be equal to 51', () => {
    const me = new Me (32, 32, 11680)
    expect(me.ageVenusYears).toEqual(51);
  });
  
  test('ageMarsYears should be equal to 17', () => {
    const me = new Me (32, 32, 11680)
    expect(me.ageMarsYears).toEqual(17);
  });

  test('ageJupiterYears should be equal to 2', () => {
    const me = new Me (32, 32, 11680)
    expect(me.ageJupiterYears).toEqual(2);
  });

  test('ageSaturnYears should be equal to 2', () => {
    const me = new Me (32, 32, 11680)
    expect(me.ageJupiterYears).toEqual(2);
  }); 

  test('ageUranusYears should be equal to 0', () => {
    const me = new Me (32, 32, 11680)
    expect(me.ageUranusYears).toEqual(0);
  });

  test('ageNeptuneYears should be equal to 0', () => {
    const me = new Me (32, 32, 11680)
    expect(me.ageNeptuneYears).toEqual(0);
  });

  test('lifeExpectancyRemainingEarthYears should be equal to 47', () => {
    const me = new Me (32)
    expect(me.lifeExpectancyRemainingEarthYears).toEqual(47);
  });

  test('lifeExpectancyRemainingMercuryYears should be equal to 194', () => {
    const me = new Me (32)
    expect(me.lifeExpectancyRemainingMercuryYears).toEqual(194);
  });

  test('lifeExpectancyRemainingVenusYears should be equal to 51', () => {
  
    expect(me.lifeExpectancyRemainingMercuryYears).toEqual(51);
  });
});