import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {StudentService} from '../../service/student.service';
import {GroupsService} from '../../service/groups.service';
import {UserModel} from '../../model/user.model';
import {GroupsModel} from '../../model/groups.model';
import {StudentModel} from '../../model/student.model';

@Component({
  selector: 'app-edit-groups-dialog',
  templateUrl: './edit-groups-dialog.component.html',
  styleUrls: ['./edit-groups-dialog.component.css']
})
export class EditGroupsDialogComponent implements OnInit {
  dataSource = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private groupsService: GroupsService) {
    if (data.action === 'add') {
      this.data.content = new GroupsModel();
      this.data.content.id = 0;
    }
  }

  ngOnInit(): void {
    console.log('input data:', this.data);
  }

  saveStudent() {
    const groupsRequestModel = new GroupsModel();
    groupsRequestModel.id = this.data.content.id;
    groupsRequestModel.code = this.data.content.code;
    groupsRequestModel.roomId = this.data.content.roomId;
    groupsRequestModel.teacherId = this.data.content.teacherId;
    this.groupsService.createGroup(groupsRequestModel).subscribe(res => {
      console.log(res);
    })
  }

}
