import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BoardsService } from '../services/boards.service';
import { CardsDialogComponent } from './cards-dialog/cards-dialog.component';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent {
  boardIndex : any = 0;
  boardTitle : string = "";
    constructor(private route:ActivatedRoute, public boardService : BoardsService,public dialog: MatDialog){}
    ngOnInit():void{  debugger;

      this.boardIndex = this.route.snapshot.paramMap.get('boardIndex');
      this.boardTitle = this.boardService.boards[this.boardIndex].title;
    }
  openCardDialog(){
    this.dialog.open(CardsDialogComponent,{
      width:'500px',
    })
  }
}
