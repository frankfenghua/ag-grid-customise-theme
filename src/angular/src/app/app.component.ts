import {Component} from '@angular/core';

import 'ag-grid-enterprise';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private columnDefs: any[];
    private rowData: any[];

    private defaultColDef: {
        sorting: true,
        // make all cols more narrow
        width: 100,
        filter: 'number',
    };

    ngOnInit() {
        this.columnDefs = this.createColDefs();
        this.rowData = this.createRowData(this.columnDefs);
    }

    private createRowData(columnDefs) {
        // create 100 rows, and fill with random numbers
        var rowData = [];
        for (var i = 0; i < 100; i++) {
            var item = {};
            columnDefs.forEach(function (colDef) {
                item[colDef.field] = Math.floor(Math.random() * 100000);
            });
            rowData.push(item);
        }
        return rowData;
    }

    private createColDefs() {
        // create cols, one for each letter
        var columnDefs = [];
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(function (letter, idx) {
            columnDefs.push({field: letter, rowDrag: idx === 0 ? true : undefined});
        });
        return columnDefs;
    }
}
