import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserModel} from '../model/user.model';
import {UserService} from '../service/user.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
    selector: 'app-dialog-content-example-dialog',
    templateUrl: './dialog-content-example-dialog.component.html',
    styleUrls: ['./dialog-content-example-dialog.component.css']
})
export class DialogContentExampleDialogComponent implements OnInit {
    dataSource = [];

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) {
        if (data.action === 'add') {
            this.data.content = new UserModel();
            this.data.content.id = 0;
        }
    }

    ngOnInit(): void {
        console.log('input data:', this.data);

    }

    saveUser() {
        let userRequestModel = new UserModel();
        userRequestModel.id = this.data.content.id;
        userRequestModel.login = this.data.content.login;
        userRequestModel.arcfl = this.data.content.arcfl;
        userRequestModel.password = this.data.content.password;
        this.userService.createUser(userRequestModel).subscribe(res => {
            console.log(res);
        })
    }


}
