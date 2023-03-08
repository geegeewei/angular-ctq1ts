import {
  Component,
  ViewChild,
  ContentChildren,
  QueryList,
  forwardRef,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDragHandle,
} from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  checkbox: string;
  rule: string;
  freeSMS: string;
  lineBC: string;
  lineAOA: string;
  push: string;
  paidSMS: string;
  imessage: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    checkbox: '',
    rule: '',
    freeSMS: '',
    lineBC: '',
    lineAOA: '',
    push: '',
    paidSMS: '',
    imessage: '',
    email: '',
  },
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('table') table: MatTable<PeriodicElement>;
  displayedColumns: string[] = [
    // 'position',
    // 'checkbox',
    // 'rule',
    'freeSMS',
    'lineBC',
    'lineAOA',
    'push',
    'paidSMS',
    'imessage',
    'email',
  ];
  dataSource = ELEMENT_DATA;

  dropTable(event: CdkDragDrop<PeriodicElement[]>) {
    const prevIndex = this.dataSource.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
    this.table.renderRows();
  }
}
