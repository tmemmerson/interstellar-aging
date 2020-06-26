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
   
    expect(me.ageEarthDays).toEqual(11680);
  });
  
});