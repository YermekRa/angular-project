import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../service/user.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {UserModel} from '../model/user.model';
import {MatDialog} from '@angular/material/dialog';
import {DialogUserControlComponent} from '../users-control/dialog-user-control/dialog-user-control.component';

@Component({
    selector: 'app-pageable-demo-users',
    templateUrl: './pageable-demo-users.component.html',
    styleUrls: ['./pageable-demo-users.component.css']
})
export class PageableDemoUsersComponent implements OnInit {
    dataSource: [];
    displayedColumns: string[] = ['id', 'login', 'arcfl', 'actions'];
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
        let dialodData = {
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
