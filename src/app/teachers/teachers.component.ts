import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {TeacherService} from '../service/teacher.service';
import {TeacherModel} from '../model/teacher.model';
import {UserModel} from '../model/user.model';


@Component({
    selector: 'app-teachers',
    templateUrl: './teachers.component.html',
    styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
    displayedColumns: string[] = ['id', 'userId', 'firstName', 'lastName', 'phoneNumber', 'level', 'birthdate', 'actions'];
    dataSource = [];
    panelOpenState = false;
    addingTeacherModel: TeacherModel;
    addingUserModel: UserModel;

    constructor(private teacherService: TeacherService) {
        this.addingTeacherModel = new TeacherModel();
        this.addingUserModel = new UserModel();
    }

    ngOnInit(): void {
        this.getAllTeachers();
    }

    addTeacher() {
        console.log(this.addingTeacherModel);
        console.log(this.addingTeacherModel.firstName);
        this.teacherService.createTeacher(this.addingTeacherModel).subscribe(res => {
            console.log(res);
            this.addingTeacherModel = new TeacherModel();
            this.getAllTeachers();
        });
    }

    getAllTeachers() {
        this.teacherService.getAllUser().subscribe(res => {
            console.log(res);
            this.dataSource = res;
            console.log(this.dataSource);
        })
    }
    deleteTeacherById(id) {

    }
}
