import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RolesService} from '../service/roles.service';
import {DialogRolesComponent} from './dialog-roles/dialog-roles.component';


@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
    displayedColumns: string[] = ['id', 'code', 'name', 'actions'];
    dataSource = [];

    constructor(private rolesService: RolesService,
                public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.rolesService.getAllRoles().subscribe(res => {
            console.log(res);
            this.dataSource = res;
        })
    }

    openDialog(element, edit: string) {
        const dialodData = {
            content: element,
            action: edit
        };
        const dialogRef = this.dialog.open(DialogRolesComponent,
            {
                data: dialodData,
                width: '600px'
            });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.rolesService.getAllRoles().subscribe(res => {
                console.log(res);
                this.dataSource = res;
            })
        });

    }

    deleteRoleById(id: number) {
        this.rolesService.deleteRoleById(id).subscribe(res => {
           this.rolesService.getAllRoles();

        });

    }
}
