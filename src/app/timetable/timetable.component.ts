import { Component, OnInit } from '@angular/core';
import {TimetableModel} from '../model/timetable.model';
import {TimetableService} from '../service/timetable.service';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import {DialogUserControlComponent} from '../users-control/dialog-user-control/dialog-user-control.component';
import {EditTimetableDialogComponent} from './edit-timetable-dialog/edit-timetable-dialog.component';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'subjectId', 'date', 'roomId', 'teacherId', 'classId', 'actions'];
  dataSource = [];
  panelOpenState = false;
  addingTimetableModel: TimetableModel;
  pageableResponse: any;
  page = 0;
  size = 5;
  length: 0;

  constructor(private timetableService: TimetableService,
              public dialog: MatDialog) {
    this.addingTimetableModel = new TimetableModel();
  }

  ngOnInit(): void {
    this.getAllTimetableByPage();
  }

  addTimetable() {
    console.log(this.addingTimetableModel);
    console.log(this.addingTimetableModel.id);
    this.timetableService.createTimetable(this.addingTimetableModel).subscribe(res => {
      console.log(res);
      this.addingTimetableModel = new TimetableModel();
      this.getAllTimetableByPage();
    });
  }

  // getAllTimetable() {
  //   this.timetableService.getAllTimetable().subscribe(res => {
  //     console.log(res);
  //     this.dataSource = res;
  //     console.log(this.dataSource);
  //   })
  // }

  deleteTimetable(id: number) {
    this.timetableService.deleteTimetable(id).subscribe(res => {
      console.log(res);
      this.dataSource = res;
      console.log(this.dataSource);
      this.getAllTimetableByPage();
    });
  }

  // ===========================================================================
  getAllTimetableByPage() {
    this.timetableService.getAllTimetablePaging(this.page, this.size).subscribe(res => {
      this.pageableResponse = res;
      this.dataSource = res.content;
      this.length = res.totalElements;
    })
  }

  public getServerData(event?: PageEvent) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.getAllTimetableByPage();
  }

  openDialog(element, edit: string) {
    const dialodData = {
      content: element,
      action: edit
    };
    const dialogRef = this.dialog.open(EditTimetableDialogComponent,
        {
          data: dialodData,
          width: '600px'
        });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAllTimetableByPage();
    });

  }
}
