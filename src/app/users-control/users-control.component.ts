import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {UserModel} from '../model/user.model';
import {UserService} from '../service/user.service';


@Component({
    selector: 'app-users',
    templateUrl: './users-control.component.html',
    styleUrls: ['./users-control.component.css']
})
export class UsersControlComponent implements OnInit {
    displayedColumns: string[] = ['id', 'arcfl', 'login', 'role_id', 'actions'];
    dataSource = [];

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getAllUser().subscribe(res => {
            console.log(res);
            this.dataSource = res;
        })
    }
}









