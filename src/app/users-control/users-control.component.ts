import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {UserService} from '../service/user.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogUserControlComponent} from './dialog-user-control/dialog-user-control.component';

@Component({
    selector: 'app-users',
    templateUrl: './users-control.component.html',
    styleUrls: ['./users-control.component.css']
})
export class UsersControlComponent implements OnInit {
    displayedColumns: string[] = ['id', 'arcfl', 'login', 'role_id', 'actions'];
    dataSource = [];
    pageableResponse: any;
    page = 0;
    size = 5;
    length: 0;


    constructor(private userService: UserService,
                public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getAllUsersByPage();
    }

    getAllUsersByPage() {
        this.userService.getAllUserPaging(this.page, this.size).subscribe(res => {
            this.pageableResponse = res;
            this.dataSource = res.content;
            this.length = res.totalElements;
        })
    }

    public getServerData(event?: PageEvent) {
        this.page = event.pageIndex;
        this.size = event.pageSize;
        this.getAllUsersByPage();
    }

    openDialog(element, edit: string) {
        const dialodData = {
            content: element,
            action: edit
        };
        const dialogRef = this.dialog.open(DialogUserControlComponent,
            {
                data: dialodData,
                width: '600px'
            });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.getAllUsersByPage();
        });

    }

    deleteUser(id) {

    }
}









