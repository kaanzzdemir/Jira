import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog';
import { BoardsService } from 'src/app/services/boards.service';

@Component({
  selector: 'app-boards-dialog',
  templateUrl: './boards-dialog.component.html',
  styleUrls: ['./boards-dialog.component.css']
})
export class BoardsDialogComponent {
  constructor(private dialogRef:MatDialogRef<BoardsDialogComponent>,private boardService : BoardsService){}
  addBoard = new FormGroup({
    title: new FormControl(null,[Validators.required])
  });
  create(){
    this.boardService.createBoard(this.addBoard.get('title')?.value);
  }
  close(){
    this.dialogRef.close();
  }
}
