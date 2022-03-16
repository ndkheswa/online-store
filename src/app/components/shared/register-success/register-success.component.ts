import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.scss']
})
export class RegisterSuccessComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<RegisterSuccessComponent>, @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
