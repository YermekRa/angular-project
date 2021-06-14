import {Component, OnInit} from '@angular/core';
import {GradeService} from '../service/grade.service';
import {GradeModel} from '../model/grade.model';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {EditFormComponent} from './edit-form/edit-form.component';
/*import {MatSnackBar} from '@angular/material/snack-bar';*/

/*import {PeriodicElement} from '../staff-control/staff-control.component';*/

export interface PeriodicElement {
    id: number;
    code: string;
    longname: string;

}

/*const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, code: 'A', longname: 'Excellent'},
  {id: 2, code: 'B', longname: 'Good'},
  {id: 3, code: 'C', longname: 'Satisfactory'},
  {id: 4, code: 'D', longname: 'Poor'},
  {id: 5, code: 'F', longname: 'Fail'},
];*/

@Component({
    selector: 'app-grade',
    templateUrl: './grade.component.html',
    styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
    displayedColumns: string[] = ['id', 'code', 'name', 'actions'];
    dataSource = [];
    gradeModel: GradeModel;
    panelOpenState = true;
    panelOpenState1 = false;

    constructor(private gradeService: GradeService,
                private dialog: MatDialog) {
        this.gradeModel = new GradeModel();
    }

    ngOnInit(): void {
        this.getAllGrade();
    }

    saveGrade(): void {
        this.gradeService.createGrade(this.gradeModel).subscribe(res => {
            // this.gradeModel = new GradeModel();
            this.getAllGrade();
           // this.panelOpenState = false;
        })
    }

    getAllGrade(): void {
        this.gradeService.getAllGrade().subscribe(res => {
            this.dataSource = res
        })
    }

    createGrade() {
        this.panelOpenState = true;
    }

    cancelCreateGrade() {
        this.panelOpenState = false;
    }

    deleteGrade(id: number): void {
        this.gradeService.deleteGrade(id).subscribe(res => {
            this.dataSource = res
            this.getAllGrade();
        });
    }

    onCorrect(form: any) {
        this.panelOpenState1 = true;
        this.dialog.open(EditFormComponent, {data: form});
    }
}
