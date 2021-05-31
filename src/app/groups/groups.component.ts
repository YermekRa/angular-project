import { Component, OnInit } from '@angular/core';
import {GroupsModel} from '../model/groups.model';
import {GroupsService} from '../service/groups.service';

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

  constructor( private  groupsService: GroupsService) {
    this.addingGroupsModel = new GroupsModel();
  }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    this.getAllGroups();
  }

  addGroup() {
    console.log(this.addingGroupsModel);
    console.log(this.addingGroupsModel.code);
    this.groupsService.createGroup(this.addingGroupsModel).subscribe(res => {
      console.log(res);
      this.addingGroupsModel = new GroupsModel();
      this.getAllGroups();
    });
  }

  getAllGroups() {
    this.groupsService.getAllGroups().subscribe(res => {
      console.log(res);
      this.dataSource = res;
      console.log(this.dataSource);
    })
  }

  deleteGroup(id: number) {
    this.groupsService.deleteGroup(id).subscribe(res => {
      console.log(res);
      this.dataSource = res;
      console.log(this.dataSource);
      this.getAllGroups();
    });

  }
}
