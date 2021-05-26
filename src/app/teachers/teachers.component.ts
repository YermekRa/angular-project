import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  birth_date: string;
  first_name: string;
  last_name: string;
  level: string;
  phone_number: string;
  b_user_id: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, birth_date: '01.01.1969', first_name: 'Наталья', last_name: 'Ивановна', level: 'Учитель высшей категории', phone_number: '8-707-123-1234', b_user_id: 1},
  {id: 2, birth_date: '13.04.1978', first_name: 'Петр', last_name: 'Кузнецов', level: 'Учитель', phone_number: '8-708-987-9876', b_user_id: 2},
  {id: 3, birth_date: '23.10.1988', first_name: 'Иван', last_name: 'Пивоваров', level: 'Учитель 1 категории', phone_number: '8-701-701-7101', b_user_id: 3},
  {id: 4, birth_date: '09.09.1999', first_name: 'Лариса', last_name: 'Николаевна', level: 'Учитель 3 категории', phone_number: '8-702-456-9874', b_user_id: 4}
];

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'birth_date', 'first_name', 'last_name', 'level', 'phone_number', 'b_user_id', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
