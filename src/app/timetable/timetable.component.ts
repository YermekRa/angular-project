import { Component, OnInit } from '@angular/core';
import {TimetableModel} from '../model/timetable.model';
import {TimetableService} from '../service/timetable.service';

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

  constructor(private timetableService: TimetableService) {
    this.addingTimetableModel = new TimetableModel();
  }

  ngOnInit(): void {
    this.getAllTimetable();
  }

  addTimetable() {
    console.log(this.addingTimetableModel);
    console.log(this.addingTimetableModel.id);
    this.timetableService.createTimetable(this.addingTimetableModel).subscribe(res => {
      console.log(res);
      this.addingTimetableModel = new TimetableModel();
      this.getAllTimetable();
    });
  }

  getAllTimetable() {
    this.timetableService.getAllTimetable().subscribe(res => {
      console.log(res);
      this.dataSource = res;
      console.log(this.dataSource);
    })
  }
}
