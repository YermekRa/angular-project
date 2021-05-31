import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import {UserService} from '../service/user.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogContentExampleDialogComponent} from '../dialog-content-example-dialog/dialog-content-example-dialog.component';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
    selector: 'app-users',
    templateUrl: './users-control.component.html',
    styleUrls: ['./users-control.component.css']
})
export class UsersControlComponent implements OnInit {
    displayedColumns: string[] = ['id', 'arcfl', 'login', 'role_id', 'actions'];
    dataSource =  new MatTableDataSource([]);
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private userService: UserService,
                public dialog: MatDialog) {
    }

    ngOnInit(): void {

        this.userService.getAllUser().subscribe(res => {
            console.log(res);
            this.dataSource = res;
        })

    }

    openDialog(element) {
        console.log(element);
        const dialogRef = this.dialog.open(DialogContentExampleDialogComponent, {data: element});

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}









