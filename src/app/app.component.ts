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
    rule: 'ETORO警示',
    freeSMS: 'AR1',
    lineBC: '',
    lineAOA: '',
    push: '',
    paidSMS: '',
    imessage: '',
    email: '',
  },
  {
    position: 2,
    checkbox: '',
    rule: '華航通路消費之交易',
    freeSMS: '',
    lineBC: 'C_JC_06',
    lineAOA: '',
    push: '',
    paidSMS: '',
    imessage: '',
    email: '',
  },
  {
    position: 3,
    checkbox: '',
    rule: '國內有商店資訊之購貨交易',
    freeSMS: '',
    lineBC: 'C_JC_01',
    lineAOA: '',
    push: 'CARD_DEAL1',
    paidSMS: 'MG1',
    imessage: '',
    email: '',
  },
  {
    position: 4,
    checkbox: '',
    rule: '國內無商店資訊之購貨交易',
    freeSMS: '',
    lineBC: 'C_JC_02',
    lineAOA: '',
    push: 'CARD_DEAL2',
    paidSMS: 'MG1',
    imessage: '',
    email: '',
  },
  {
    position: 5,
    checkbox: '',
    rule: '國外之購貨交易',
    freeSMS: '',
    lineBC: 'C_JC_04',
    lineAOA: '',
    push: 'CARD_DEAL4',
    paidSMS: 'MG2',
    imessage: '',
    email: '',
  },
  {
    position: 6,
    checkbox: '',
    rule: '國內代扣電信、保單之交易',
    freeSMS: '',
    lineBC: 'C_JC_05',
    lineAOA: '',
    push: 'CARD_DEAL5',
    paidSMS: 'MG5',
    imessage: '',
    email: '',
  },
  {
    position: 7,
    checkbox: '',
    rule: '國內交易',
    freeSMS: '',
    lineBC: '',
    lineAOA: '',
    push: '',
    paidSMS: '',
    imessage: 'AB1',
    email: '',
  },
  {
    position: 8,
    checkbox: '',
    rule: '國外交易',
    freeSMS: '',
    lineBC: '',
    lineAOA: '',
    push: '',
    paidSMS: '',
    imessage: 'AB3',
    email: '',
  },
  {
    position: 9,
    checkbox: '',
    rule: '鼎鈦御國內消費之交易 ',
    freeSMS: 'TP1',
    lineBC: '',
    lineAOA: '',
    push: '',
    paidSMS: '',
    imessage: '',
    email: '',
  },
  {
    position: 10,
    checkbox: '',
    rule: '鼎鈦御國外消費之交易',
    freeSMS: 'TP3',
    lineBC: '',
    lineAOA: '',
    push: '',
    paidSMS: '',
    imessage: '',
    email: '',
  },
  {
    position: 11,
    checkbox: '',
    rule: 'LINE PAY卡交易',
    freeSMS: '',
    lineBC: '',
    lineAOA: 'LP0110',
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
    'position',
    'checkbox',
    'rule',
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
