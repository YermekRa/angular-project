import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserService} from '../../service/user.service';
import {RolesService} from '../../service/roles.service';
import {UserModel} from '../../model/user.model';
import {RolesModel} from '../../model/roles.model';

@Component({
  selector: 'app-dialog-roles',
  templateUrl: './dialog-roles.component.html',
  styleUrls: ['./dialog-roles.component.css']
})
export class DialogRolesComponent implements OnInit {
  dataSource = [];
  roleList = [];
  selected;

  title = 'Редактирование роли';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private roleService: RolesService) {
    console.log(data);
    if (data.action === 'add') {
      this.data.content = new RolesModel();
      this.data.content.id = 0;
      this.title = 'Добавление роли';
    } else if (data.action === 'edit') {
      if (data.content.name) {
        this.selected = data.content.name;
      }
    }
  }

  ngOnInit(): void {
    console.log('input data:', this.data);
    this.roleService.getAllRoles();
  }

  saveRole() {
    const roleRequestModel = new RolesModel();
    roleRequestModel.id = this.data.content.id;
    roleRequestModel.code = this.data.content.code;
    roleRequestModel.name = this.data.content.name;
    console.log('this.data.content.role');
    console.log(this.data.content.name);
    this.roleService.createRole(roleRequestModel).subscribe(res => {
      console.log(res);
      this.roleService.getAllRoles();
    })
  }


}
