import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {StudentService} from '../../service/student.service';
import {TimetableService} from '../../service/timetable.service';
import {UserModel} from '../../model/user.model';
import {TimetableModel} from '../../model/timetable.model';
import {StudentModel} from '../../model/student.model';

@Component({
  selector: 'app-edit-timetable-dialog',
  templateUrl: './edit-timetable-dialog.component.html',
  styleUrls: ['./edit-timetable-dialog.component.css']
})
export class EditTimetableDialogComponent implements OnInit {
  dataSource = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private timetableService: TimetableService) {
    if (data.action === 'add') {
      this.data.content = new TimetableModel();
      this.data.content.id = 0;
    }
  }

  ngOnInit(): void {
    console.log('input data:', this.data);
  }

  saveTimetable() {
    const timetableRequestModel = new TimetableModel();
    timetableRequestModel.id = this.data.content.id;
    timetableRequestModel.classId = this.data.content.classId;
    timetableRequestModel.date = this.data.content.date;
    timetableRequestModel.roomId = this.data.content.roomId;
    timetableRequestModel.subjectId = this.data.content.subjectId;
    timetableRequestModel.teacherId = this.data.content.teacherId;
    this.timetableService.createTimetable(timetableRequestModel).subscribe(res => {
      console.log(res);
    })
  }

}
