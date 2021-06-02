import { Component, OnInit } from '@angular/core';
import {GroupsModel} from '../model/groups.model';
import {GroupsService} from '../service/groups.service';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import {DialogContentExampleDialogComponent} from '../dialog-content-example-dialog/dialog-content-example-dialog.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'code', 'teacherId', 'roomId', 'actions'];
  dataSource = [];
  panelOpenState = false;
  addingGroupsModel: GroupsModel;
  pageableResponse: any;
  page = 0;
  size = 5;
  length: 0;

  constructor( private  groupsService: GroupsService,
               public dialog: MatDialog) {
    this.addingGroupsModel = new GroupsModel();
  }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    this.getAllGroupsByPage();
  }

  addGroup() {
    console.log(this.addingGroupsModel);
    console.log(this.addingGroupsModel.code);
    this.groupsService.createGroup(this.addingGroupsModel).subscribe(res => {
      console.log(res);
      this.addingGroupsModel = new GroupsModel();
      this.getAllGroupsByPage();
    });
  }

  // getAllGroups() {
  //   this.groupsService.getAllGroups().subscribe(res => {
  //     console.log(res);
  //     this.dataSource = res;
  //     console.log(this.dataSource);
  //   })
  // }

  deleteGroup(id: number) {
    this.groupsService.deleteGroup(id).subscribe(res => {
      console.log(res);
      this.dataSource = res;
      console.log(this.dataSource);
      this.getAllGroupsByPage();
    });

  }

  // ===========================================================================
  getAllGroupsByPage() {
    this.groupsService.getAllGroupsPaging(this.page, this.size).subscribe(res => {
      this.pageableResponse = res;
      this.dataSource = res.content;
      this.length = res.totalElements;
    })
  }

  public getServerData(event?: PageEvent) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.getAllGroupsByPage();
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
      this.getAllGroupsByPage();
    });

  }
}
