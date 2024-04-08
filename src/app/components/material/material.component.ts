import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [MatButton],
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss'
})
export class MaterialComponent {

  public userName:string = "";

  constructor(public dialog: MatDialog) {}

  public saveName(event:MouseEvent):void{
    const dialogRef = this.dialog.open(DialogDataExampleDialog, {
      data: this.userName
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userName = result;
    });

  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-name.html',
  standalone: true,
  imports: [FormsModule, MatButton, MatDialogContent, MatDialogActions, MatDialogClose],
})
export class DialogDataExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogDataExampleDialog>, @Inject(MAT_DIALOG_DATA) public userName:String) {}
  public closeDialog(): void {
    this.dialogRef.close();
  }
}
