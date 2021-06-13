import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserModel} from '../../model/user.model';
import {UserService} from '../../service/user.service';
import {RolesService} from '../../service/roles.service';

@Component({
    selector: 'app-dialog-content-example-dialog',
    templateUrl: './dialog-user-control.component.html',
    styleUrls: ['./dialog-user-control.component.css']
})
export class DialogUserControlComponent implements OnInit {
    dataSource = [];
    roleList = [];
    selected;

    // list_roles = new RolesModel();
    title = 'Редактирование профиля';


    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                private userService: UserService,
                private roleService: RolesService) {
        console.log(data);
        if (data.action === 'add') {
            this.data.content = new UserModel();
            this.data.content.id = 0;
            this.title = 'Добавление профиля';
        } else if (data.action === 'edit') {
            if (data.content.role) {
                this.selected = data.content.role;
            }
        }
    }

    ngOnInit(): void {
        console.log('input data:', this.data);
        this.getRoleList();
    }

    saveUser() {
        const userRequestModel = new UserModel();
        userRequestModel.id = this.data.content.id;
        userRequestModel.login = this.data.content.login;
        userRequestModel.arcfl = this.data.content.arcfl;
        userRequestModel.password = this.data.content.password;
        userRequestModel.roleId = this.data.content.roleId;
        console.log('this.data.content.role');
        console.log(this.data.content.role);
        this.userService.createUser(userRequestModel).subscribe(res => {
            console.log(res);
        })
    }

    // Выбор справочника ролей
    getRoleList() {
        this.roleService.getAllRoles().subscribe(res => {
            console.log('role list');
            console.log(res);
            this.roleList = res;
        });
    }


}
