import{ Me } from '../src/calculator'
import { TestScheduler } from 'jest'

describe(Me, () => {

  test('age should be set to 32', () => {
    const me = new Me(32);
    expect(Me.age).toEqual(32);
  });
  test('ageEarthYears should be set to 32', () => {
    const me = new Me(32);
    expect(Me.ageEarthYears).toEqual(32);
  });
  test('ageEarthDays should be set to 11,680', () => {
    const me = new Me (32)
    expect(Me.ageEarthDays).toEqual(11680);
  });
  test('ageMercuryYears should be equal to 132', () => {
    const me = new Me (32)
    expect(Me.ageMercuryYears).toEqual(132);
  });
  test('ageVenusYears should be equal to 51', () => {
    const me = new Me (32)
    expect(Me.ageVenusYears).toEqual(51);
  });
  test('ageMarsYears should be equal to 17', () => {
    const me = new Me (32)
    expect(Me.ageMarsYears).toEqual(17);
  });
  test('ageJupiterYears should be equal to 2', () => {
    const me = new Me (32)
    expect(Me.ageJupiterYears).toEqual(2);
  });
  test('ageSaturnYears should be equal to 2', () => {
    const me = new Me (32)
    expect(Me.ageJupiterYears).toEqual(2);
  }); 
  test('ageUranusYears should be equal to 0', () => {
    const me = new Me (32)
    expect(Me.ageUranusYears).toEqual(0);
  });
  test('ageNeptuneYears should be equal to 0', () => {
    const me = new Me (32)
    expect(Me.ageNeptuneYears).toEqual(0);
  });
  test('lifeExpectancyEarthYears should be equal to 47', () => {
    const me = new Me (32)
    expect(Me.lifeExpectancyEarthYears).toEqual(47);
  });
  test('lifeExpectancyMercuryYears should be equal to 194', () => {
    const me = new Me (32)
    expect(Me.lifeExpectancyMercuryYears).toEqual(194);
  });
  test('lifeExpectancyVenusYears should be equal to 76', () => {
    const me = new Me (32)
    expect(Me.lifeExpectancyVenusYears).toEqual(76);
  });
  test('lifeExpectancyMarsYears should be equal to 24', () => {
    const me = new Me (32)
    expect(Me.lifeExpectancyMarsYears).toEqual(24);
  });
  test('lifeExpectancyJupiterYears should be equal to 3', () => {
    const me = new Me (32)
    expect(Me.lifeExpectancyJupiterYears).toEqual(3);
  });
  test('lifeExpectancySaturnYears should be equal to 1', () => {
    const me = new Me (32)
    expect(Me.lifeExpectancySaturnYears).toEqual(1);
  });
  test('lifeExpectancyUranusYears should be equal to 0', () => {
    const me = new Me (32)
    expect(Me.lifeExpectancyUranusYears).toEqual(0);
  });
  test('lifeExpectancyNeptuneYears should be equal to 0', () => {
    const me = new Me (32)
    expect(Me.lifeExpectancyNeptuneYears).toEqual(0);
  }); 
});