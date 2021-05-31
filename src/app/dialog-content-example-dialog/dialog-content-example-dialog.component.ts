import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserModel} from '../model/user.model';
import {TeacherModel} from '../model/teacher.model';
import {TeacherService} from '../service/teacher.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrls: ['./dialog-content-example-dialog.component.css']
})
export class DialogContentExampleDialogComponent implements OnInit {
  dataSource = [];
  addingUserModel: UserModel;


  constructor(@Inject(MAT_DIALOG_DATA) public data: UserModel,              private userService: UserService) {
    this.addingUserModel = new UserModel();
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
  addUser() {
    console.log(this.addingUserModel);
    console.log(this.addingUserModel.id);
    this.userService.createUser(this.addingUserModel).subscribe(res => {
      console.log(res);
      this.addingUserModel = new UserModel();
      this.getAllUsers();
    });
  }

  getAllUsers() {
    this.userService.getAllUser().subscribe(res => {
      console.log(res);
      this.dataSource = res;
      console.log(this.dataSource);
    })
  }
}
