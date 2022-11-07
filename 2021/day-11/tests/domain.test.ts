import { Colony } from '../app/domain';
import { data } from '../app/data';

let colony: Colony;

describe('initialize', () => {
  beforeEach(() => {
    let initialState: Array<number> = [
        123,
        123,
    ];
    colony = new Colony(initialState);
  });
  describe('small colony', () => {
      test('first', () => {
          expect(0).toBe(0);
      });

      test('can import data', () => {
        expect(data.length).toBe(10);
      });

      test('assess the width of colony', () => {
        expect(colony.width()).toBe(3);
      });

      test('bunch of octopuses just increment', () => {
        colony.increment();
        let newState = colony.current();
        expect(newState).toStrictEqual([
            234,
            234
        ]);
      });

      test.only('one of them flashes', () => {
        let initialState: Array<number> = [
            123,
            193,
        ];
        colony = new Colony(initialState);
        colony.increment();
        let newState = colony.current();
        expect(newState).toStrictEqual([
            345,
            305
        ]);
      });

      test('substring', () => {
        let mystr = '123';
        let searchHit = mystr.indexOf('2');
        let composed = mystr.substring(0, searchHit) + '0' + mystr.substring(searchHit + 1);
        expect(composed).toBe('103');
      });
    });
});
