import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {TeacherService} from '../service/teacher.service';
import {TeacherModel} from '../model/teacher.model';
import {UserModel} from '../model/user.model';
import {PageEvent} from '@angular/material/paginator';


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
    pageableResponse: any;
    page = 0;
    size = 5;
    length: 0;

    constructor(private teacherService: TeacherService) {
        this.addingTeacherModel = new TeacherModel();
        this.addingUserModel = new UserModel();
    }

    ngOnInit(): void {
        this.getAllTeacherByPage();
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

    deleteTeacherById(id: number) {
        this.teacherService.deleteTeacherById(id).subscribe(res => {
            console.log(res);
            this.dataSource = res;
            console.log(this.dataSource);
            this.getAllTeacherByPage();
        });
    }

    getAllTeacherByPage() {
        this.teacherService.getAllTeacherPaging(this.page, this.size).subscribe(res => {
            this.pageableResponse = res;
            this.dataSource = res.content;
            this.length = res.totalElements;
        })
    }

    public getServerData(event?: PageEvent) {
        this.page = event.pageIndex;
        this.size = event.pageSize;
        this.getAllTeacherByPage();
    }
}
