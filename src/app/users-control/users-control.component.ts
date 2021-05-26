import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  arcfl: boolean;
  login: string;
  password: string;
  role_id: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, arcfl: true, login: 'ivanovn', password: '123', role_id: 2},
  {id: 2, arcfl: false, login: 'kuznecp', password: '123', role_id: 2},
  {id: 3, arcfl: true, login: 'pivovi', password: '123', role_id: 2},
  {id: 4, arcfl: true, login: 'nikolla', password: '123', role_id: 2}
];


@Component({
  selector: 'app-users',
  templateUrl: './users-control.component.html',
  styleUrls: ['./users-control.component.css']
})
export class UsersControlComponent implements OnInit {
  displayedColumns: string[] = ['id', 'arcfl', 'login', 'password', 'role_id', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }
}









