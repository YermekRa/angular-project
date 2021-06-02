import { Component, OnInit } from '@angular/core';
import {StudentModel} from '../model/student.model';
import {StudentService} from '../service/student.service';
import {PageEvent} from '@angular/material/paginator';
import {DialogContentExampleDialogComponent} from '../dialog-content-example-dialog/dialog-content-example-dialog.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userId', 'firstName', 'lastName', 'classId', 'level' , 'birthdate', 'actions'];
  dataSource = [];
  panelOpenState = false;
  addingStudentModel: StudentModel;
  pageableResponse: any;
  page = 0;
  size = 5;
  length: 0;

  constructor( private  studentService: StudentService,
               public dialog: MatDialog) {
    this.addingStudentModel = new StudentModel();
  }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    this.getAllStudentByPage();
  }

  addStudent() {
    console.log(this.addingStudentModel);
    console.log(this.addingStudentModel.firstName);
    this.studentService.createStudent(this.addingStudentModel).subscribe(res => {
      console.log(res);
      this.addingStudentModel = new StudentModel();
      this.getAllStudentByPage();
    });
  }

  // getAllStudent() {
  //   this.studentService.getAllStudent().subscribe(res => {
  //     console.log(res);
  //     this.dataSource = res;
  //     console.log(this.dataSource);
  //   })
  // }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(res => {
      console.log(res);
      this.dataSource = res;
      console.log(this.dataSource);
      this.getAllStudentByPage();
    });
  }
  // ===========================================================================
  getAllStudentByPage() {
    this.studentService.getAllStudentPaging(this.page, this.size).subscribe(res => {
      this.pageableResponse = res;
      this.dataSource = res.content;
      this.length = res.totalElements;
    })
  }

  public getServerData(event?: PageEvent) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.getAllStudentByPage();
  }

  openDialog(element, edit: string) {
    const dialodData = {
      content: element,
      action: edit
    };
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent,
        {
          data: dialodData,
          width: '600px'
        });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAllStudentByPage();
    });

  }

}
