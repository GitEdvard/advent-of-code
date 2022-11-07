"use strict";
exports.__esModule = true;
exports.Colony = void 0;
var Colony = /** @class */ (function () {
    function Colony(initialState) {
        this.currentState = initialState;
        var firstRow = this.currentState[0];
        this._width = firstRow.toString().length;
        var additionStr = '1'.repeat(this.width());
        this.additionTemplate = parseInt(additionStr);
    }
    Colony.prototype.increment = function () {
        var newState = [];
        // increment base
        for (var _i = 0, _a = this.currentState; _i < _a.length; _i++) {
            var row = _a[_i];
            var incrementedRow = row + this.additionTemplate;
            newState.push(incrementedRow);
        }
        // check for flashes and increment more
        var flashed = [];
        for (var _b = 0, newState_1 = newState; _b < newState_1.length; _b++) {
            var row = newState_1[_b];
            var rowStr = row.toString();
            console.log('str: ' + rowStr);
            var searchHit = rowStr.indexOf('9');
            console.log('hej ' + searchHit.toString());
            if (searchHit > -1) {
                var newRow = void 0;
                newRow = rowStr.substring(0, searchHit) + '0' + rowStr.substring(searchHit + 1);
                flashed.push(parseInt(newRow));
            }
            else {
                flashed.push(row);
            }
        }
        this.currentState = flashed;
    };
    Colony.prototype.width = function () {
        return this._width;
    };
    Colony.prototype.current = function () {
        return this.currentState;
    };
    return Colony;
}());
exports.Colony = Colony;
