import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {SubjectModel} from '../model/subject.model';
import {SubjectService} from '../service/subject.service';
import {EditFromSubjectComponent} from './edit-from-subject/edit-from-subject.component';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  displayedColumns: string[] = ['id', 'code', 'name', 'actions'];
  dataSource = [];
  subjectModel: SubjectModel;
  panelOpenState = true;
  panelOpenState1 = false;
  constructor(private subjectService: SubjectService,
              private dialog: MatDialog) {
    this.subjectModel = new SubjectModel();
  }

  ngOnInit(): void {
    this.getAllSubject();
  }

  saveSubject(): void {
    this.subjectService.createSubject(this.subjectModel).subscribe(res => {
      // this.roomModel = new RoomModel();
      this.getAllSubject();
      this.dialog.closeAll();
  //    this.panelOpenState = false;
    })
  }

  getAllSubject(): void {
    this.subjectService.getAllSubject().subscribe(res => {
      this.dataSource = res
    })
  }

  createSubject() {
    this.panelOpenState = true;
  }

  /*cancelCreateSubject() {
    //this.panelOpenState = false;
  }*/

  deleteSubject(id: number): void {
    this.subjectService.deleteSubject(id).subscribe(res => {
      this.dataSource = res
      this.getAllSubject();
    });
  }
  onCorrect(form: any) {
    this.panelOpenState1 = true;
    this.dialog.open(EditFromSubjectComponent, {data: form});
  }
}
