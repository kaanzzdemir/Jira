import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  public boards:Array<any> =[];
  constructor() { 
    let storage = localStorage.getItem('boardss');
    if(storage!=null){
      this.boards = JSON.parse(storage); 
    }
  }

  createBoard(title:any){
    let newBoardObj={
      title:title,
      cards:[]
    }
    this.boards.push(newBoardObj);
    localStorage.setItem('boardss',JSON.stringify(this.boards));
  }
  deleteBoards(BoardNumber : number){
    this.boards.splice(BoardNumber,1);
    localStorage.setItem('boardss',JSON.stringify(this.boards));
  }
}
