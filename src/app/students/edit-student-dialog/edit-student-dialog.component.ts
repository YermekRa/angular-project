import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {StudentService} from '../../service/student.service';
import {UserModel} from '../../model/user.model';
import {StudentModel} from '../../model/student.model';

@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.css']
})
export class EditStudentDialogComponent implements OnInit {
  dataSource = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private studentService: StudentService) {
    if (data.action === 'add') {
      this.data.content = new UserModel();
      this.data.content.id = 0;
    }
  }

  ngOnInit(): void {
    console.log('input data:', this.data);
  }

  saveStudent() {
    const studentRequestModel = new StudentModel();
    studentRequestModel.id = this.data.content.id;
    studentRequestModel.birthdate = this.data.content.birthdate;
    studentRequestModel.classId = this.data.content.classId;
    studentRequestModel.firstName = this.data.content.firstName;
    studentRequestModel.lastName = this.data.content.lastName;
    studentRequestModel.level = this.data.content.level;
    studentRequestModel.userId = this.data.content.userId;
    this.studentService.createStudent(studentRequestModel).subscribe(res => {
      console.log(res);
    })
  }

}
