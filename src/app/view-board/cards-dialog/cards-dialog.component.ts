import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cards-dialog',
  templateUrl: './cards-dialog.component.html',
  styleUrls: ['./cards-dialog.component.css']
})
export class CardsDialogComponent {
  constructor(private dialogRef:MatDialogRef<CardsDialogComponent>,private cardService : CardsService){}
  addCard = new FormGroup({
    title: new FormControl(null,[Validators.required])
  });
  create(){
    this.cardService.createCard();
  }
  close(){
    this.dialogRef.close();
  }
}
