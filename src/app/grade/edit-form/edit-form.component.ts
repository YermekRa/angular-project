import {Component, Inject, OnInit} from '@angular/core';
import {GradeModel} from '../../model/grade.model';
import {GradeService} from '../../service/grade.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  displayedColumns: string[] = ['id', 'code', 'name', 'actions'];
  dataSource = [];
  gradeModel: GradeModel;
  panelOpenState = false;
  panelOpenState1 = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: GradeModel, private gradeService: GradeService, private dialog: MatDialog) {
  }
  /*constructor(private gradeService: GradeService,
              private dialog: MatDialog) {
    // this.gradeModel = new GradeModel();
  }*/

  ngOnInit(): void {

  }

  saveGrade(): void {
    this.gradeService.createGrade(this.data).subscribe(res => {
       this.gradeModel = new GradeModel();
      // this.getAllGrade();
      //this.panelOpenState = false;
      this.dialog.closeAll();
    })
  }


  createGrade() {
    this.panelOpenState = true;
  }

  cancelCreateGrade() {
    this.dialog.closeAll();
  }

}

