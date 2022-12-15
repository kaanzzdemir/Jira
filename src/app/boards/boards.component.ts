import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardsService } from '../services/boards.service';
import { BoardsDialogComponent } from './boards-dialog/boards-dialog.component';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent {
  constructor(public dialog: MatDialog, public boardService : BoardsService){}
  openDialog(){
    this.dialog.open(BoardsDialogComponent,{
      width:'500px',
    })
  }
  deleteBoard(index:number){
    this.boardService.deleteBoards(index);
  }
}
