import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  code: string
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, code: 'ADMIN', name: 'Admin'},
  {id: 2, code: 'TEACHER', name: 'Teacher'},
  {id: 1, code: 'STUDENT', name: 'Student'}
];

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'code', 'name',  'actions'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
