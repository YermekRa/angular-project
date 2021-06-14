import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {SubjectModel} from '../../model/subject.model';
import {SubjectService} from '../../service/subject.service';

@Component({
  selector: 'app-edit-from-subject',
  templateUrl: './edit-from-subject.component.html',
  styleUrls: ['./edit-from-subject.component.css']
})

export class EditFromSubjectComponent implements OnInit {
  displayedColumns: string[] = ['id', 'code', 'name', 'actions'];
  dataSource = [];


  constructor(@Inject(MAT_DIALOG_DATA) public data: SubjectModel, private subjectService: SubjectService, private dialog: MatDialog) {
  }

  ngOnInit(): void {

  }

  saveSubject(): void {
    this.subjectService.createSubject(this.data).subscribe(res => {
      this.dialog.closeAll();
    })
  }

  cancelCreateSubject() {
    this.dialog.closeAll();
  }

}
