import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RoomModel} from '../model/room.model';
import {RoomService} from '../service/room.service';
import {EditFormComponent} from '../grade/edit-form/edit-form.component';
import {EditFormRoomComponent} from './edit-form-room/edit-form-room.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit {
  displayedColumns: string[] = ['id', 'code', 'name', 'floor', 'actions'];
  dataSource = [];
  roomModel: RoomModel;
  panelOpenState = true;
  panelOpenState1 = false;
  constructor(private roomService: RoomService,
              private dialog: MatDialog) {
    this.roomModel = new RoomModel();
  }

  ngOnInit(): void {
    this.getAllRoom();
  }

  saveRoom(): void {
    this.roomService.createRoom(this.roomModel).subscribe(res => {
      // this.roomModel = new RoomModel();
      this.getAllRoom();
      //this.panelOpenState = false;
    })
  }

  getAllRoom(): void {
    this.roomService.getAllRoom().subscribe(res => {
      this.dataSource = res
    })
  }

  createRoom() {
    this.panelOpenState = true;
  }

  cancelCreateRoom() {
    this.panelOpenState = false;
  }

  deleteRoom(id: number): void {
    this.roomService.deleteRoom(id).subscribe(res => {
      this.dataSource = res
      this.getAllRoom();
    });
  }
  onCorrect(form: any) {
    this.panelOpenState1 = true;
    this.dialog.open(EditFormRoomComponent, {data: form});
  }
}

