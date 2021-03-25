import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  @Input() listOfColumn: Array<any>;
  @Input() listOfData: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
