import { Component, ViewChild, ContentChildren, QueryList, forwardRef
 } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';
import {MatTable} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, rule: 'ETORO警示', freeSMS: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, rule: '華航通路消費之交易', freeSMS: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, rule: '國內有商店資訊之購貨交易', freeSMS: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, rule: '國內無商店資訊之購貨交易',freeSMS: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, rule: '國外之購貨交易', freeSMS: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, rule: '國內代扣電信、保單之交易', freeSMS: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, rule: '國內交易', freeSMS: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, rule: '國外交易', freeSMS: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, rule: '鼎鈦御國內消費之交易 ',freeSMS: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, rule: '鼎鈦御國外消費之交易', freeSMS: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('table') table: MatTable<PeriodicElement>;
  displayedColumns: string[] = ['position', 'rule', 'freeSMS', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
  dropTable(event: CdkDragDrop<PeriodicElement[]>) {
    const prevIndex = this.dataSource.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
    this.table.renderRows();
  }
}
