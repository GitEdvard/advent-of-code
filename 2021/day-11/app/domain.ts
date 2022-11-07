export class Colony {
    currentState: Array<number>;
    _width: number;
    additionTemplate: number;

    constructor(initialState: Array<number>) {
        this.currentState = initialState;
        let firstRow = this.currentState[0];
        this._width = firstRow.toString().length;
        let additionStr = '1'.repeat(this.width());
        this.additionTemplate = parseInt(additionStr);
    }

    increment(): void {
        let newState: Array<number> = [];
        // increment base
        for (const row of this.currentState) {
            let incrementedRow = row + this.additionTemplate;
            newState.push(incrementedRow);
        }
        // check for flashes and increment more
        let flashed: Array<number> = [];
        for (const row of newState) {
            let rowStr = row.toString();
            console.log('str: ' + rowStr);
            let searchHit = rowStr.indexOf('9');
            console.log('hej ' + searchHit.toString());
            if (searchHit > -1) {
                let newRow: string;
                newRow = rowStr.substring(0, searchHit) + '0' + rowStr.substring(searchHit + 1);
                flashed.push(parseInt(newRow));
            }
            else {
                flashed.push(row);
            }
        }
        this.currentState = flashed;

    }

    width(): number {
        return this._width;
    }
    current(): Array<number> {
        return this.currentState;
    }

}
