import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {TeacherModel} from '../../model/teacher.model';
import {TeacherService} from '../../service/teacher.service';
import {UserService} from '../../service/user.service';

@Component({
    selector: 'app-dialog-content-example-dialog',
    templateUrl: './dialog-teacher.component.html',
    styleUrls: ['./dialog-teacher.component.css']
})
export class DialogTeacherComponent implements OnInit {
    dataSource = [];
    userList = [];
    selected;

    // list_roles = new RolesModel();
    title = 'Редактирование профиля';


    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                private userService: UserService,
                private teacherService: TeacherService ) {
        console.log(data);
        if (data.action === 'add') {
            this.data.content = new TeacherModel();
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
        this.getUserList();
    }

    saveTeacher() {
        const teacherRequestModel = new TeacherModel();
    teacherRequestModel.id = this.data.content.id;
    teacherRequestModel.birthdate = this.data.content.birthdate;
    teacherRequestModel.firstName = this.data.content.firstName;
    teacherRequestModel.lastName = this.data.content.lastName;
    teacherRequestModel.level = this.data.content.level;
    teacherRequestModel.phoneNumber = this.data.content.phoneNumber;
    teacherRequestModel.userId = this.data.content.userId;
        console.log('this.data.content.role');
        console.log(this.data.content.id);
        this.teacherService.createTeacher(teacherRequestModel).subscribe(res => {
            console.log(res);
        })
    }

    // Выбор справочника ролей
    getUserList() {
        this.userService.getAllUser().subscribe(res => {
            console.log('login list');
            console.log(res);
            this.userList = res;
        });
    }


}
