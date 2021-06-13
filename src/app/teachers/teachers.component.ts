import {Component, OnInit} from '@angular/core';
import {TeacherService} from '../service/teacher.service';
import {PageEvent} from '@angular/material/paginator';
import {DialogTeacherComponent} from './dialog-teacher/dialog-teacher.component';
import {MatDialog} from '@angular/material/dialog';
import {TeacherModel} from '../model/teacher.model';


@Component({
    selector: 'app-teachers',
    templateUrl: './teachers.component.html',
    styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
    displayedColumns: string[] = ['id', 'userId', 'firstName', 'lastName', 'phoneNumber', 'level', 'birthdate', 'actions'];
    dataSource = [];
    pageableResponse: any;
    page = 0;
    size = 5;
    length: 0;

    constructor(private teacherService: TeacherService,
                public dialog: MatDialog) {

    }

    ngOnInit(): void {
        this.getAllTeacherByPage();
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

    openDialog(element, edit: string) {
        const dialodData = {
            content: element,
            action: edit
        };
        const dialogRef = this.dialog.open(DialogTeacherComponent,
            {
                data: dialodData,
                width: '600px'
            });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.getAllTeacherByPage();
        });
    }

    deleteTeacherById(id: number) {
        this.teacherService.deleteTeacherById(id).subscribe(res => {
            console.log(res);
            this.dataSource = res;
            console.log(this.dataSource);
            this.getAllTeacherByPage();
        });
    }

}
