import { Component } from '@angular/core';

interface DataItem {
  name: string;
  chinese: number;
  math: number;
  english: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listOfColumn = [
    {
      title: 'Name',
      value: 'name',
      compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      priority: false
    },
    {
      title: 'Chinese Score',
      value: 'chinese',
      compare: (a: DataItem, b: DataItem) => a.chinese - b.chinese,
      priority: false
    },
    {
      title: 'Math Score',
      value: 'math',
      compare: (a: DataItem, b: DataItem) => a.math - b.math,
      priority: false
    },
    {
      title: 'English Score',
      value: 'english',
      compare: (a: DataItem, b: DataItem) => a.english - b.english,
      priority: false
    }
  ];
  listOfData: DataItem[] = [
    {
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70
    },
    {
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89
    },
    {
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70
    },
    {
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89
    }
  ];
}
