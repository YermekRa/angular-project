import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {RoomModel} from '../../model/room.model';
import {RoomService} from '../../service/room.service';

@Component({
  selector: 'app-edit-form-room',
  templateUrl: './edit-form-room.component.html',
  styleUrls: ['./edit-form-room.component.css']
})

export class EditFormRoomComponent implements OnInit {
  displayedColumns: string[] = ['id', 'code', 'name', 'floor', 'actions'];
  dataSource = [];


  constructor(@Inject(MAT_DIALOG_DATA) public data: RoomModel, private roomService: RoomService, private dialog: MatDialog) {
  }

  ngOnInit(): void {

  }

  saveRoom(): void {
    this.roomService.createRoom(this.data).subscribe(res => {
      this.dialog.closeAll();
    })
  }

  cancelCreateRoom() {
    this.dialog.closeAll();
  }

}
