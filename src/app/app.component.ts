import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MyModalComponent } from './my-modal/my-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name: string;
  color: string;
  auto: string

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '250px',
      data: { name: this.name, color: this.color, auto: this.auto }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res.color;
      this.auto = res.auto;
    });
  }
}
