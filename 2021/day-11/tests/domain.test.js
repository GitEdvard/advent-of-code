"use strict";
exports.__esModule = true;
var domain_1 = require("../app/domain");
var data_1 = require("../app/data");
var colony;
describe('initialize', function () {
    beforeEach(function () {
        var initialState = [
            123,
            123,
        ];
        colony = new domain_1.Colony(initialState);
    });
    describe('small colony', function () {
        test('first', function () {
            expect(0).toBe(0);
        });
        test('can import data', function () {
            expect(data_1.data.length).toBe(10);
        });
        test('assess the width of colony', function () {
            expect(colony.width()).toBe(3);
        });
        test('bunch of octopuses just increment', function () {
            colony.increment();
            var newState = colony.current();
            expect(newState).toStrictEqual([
                234,
                234
            ]);
        });
        test.only('one of them flashes', function () {
            var initialState = [
                123,
                193,
            ];
            colony = new domain_1.Colony(initialState);
            colony.increment();
            var newState = colony.current();
            expect(newState).toStrictEqual([
                345,
                305
            ]);
        });
        test('substring', function () {
            var mystr = '123';
            var searchHit = mystr.indexOf('2');
            var composed = mystr.substring(0, searchHit) + '0' + mystr.substring(searchHit + 1);
            expect(composed).toBe('103');
        });
    });
});
