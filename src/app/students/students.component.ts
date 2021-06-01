import { Component, OnInit } from '@angular/core';
import {StudentModel} from '../model/student.model';
import {StudentService} from '../service/student.service';


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

  constructor( private  studentService: StudentService) {
    this.addingStudentModel = new StudentModel();
  }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    this.getAllStudent();
  }

  addStudent() {
    console.log(this.addingStudentModel);
    console.log(this.addingStudentModel.firstName);
    this.studentService.createStudent(this.addingStudentModel).subscribe(res => {
      console.log(res);
      this.addingStudentModel = new StudentModel();
      this.getAllStudent();
    });
  }

  getAllStudent() {
    this.studentService.getAllStudent().subscribe(res => {
      console.log(res);
      this.dataSource = res;
      console.log(this.dataSource);
    })
  }

}
