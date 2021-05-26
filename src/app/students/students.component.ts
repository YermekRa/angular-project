import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  user_id: number;
  firstname: string;
  lastname: string;
  birthdate: string;
  group_id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, user_id: 1, firstname: 'Вова', lastname: 'Путин', birthdate: '01.01.1971', group_id: 1},
  {id: 2, user_id: 5, firstname: 'Джеки', lastname: 'Чан', birthdate: '01.01.1981', group_id: 1},
  {id: 2, user_id: 7, firstname: 'Кролик', lastname: 'Роджер', birthdate: '01.01.1971', group_id: 1},
];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'user_id', 'firstname', 'lastname', 'birthdate', 'group_id', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
