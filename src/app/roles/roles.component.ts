import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RolesService} from '../service/roles.service';



@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'code', 'name',  'actions'];
  dataSource = [];
  constructor(private rolesService: RolesService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.rolesService.getAllRoles().subscribe(res => {
      console.log(res);
      this.dataSource = res;
    })
  }

}
