import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-enroll-error-dialog',
  templateUrl: './enroll-error-dialog.component.html',
  styleUrls: ['./enroll-error-dialog.component.scss']
})
export class EnrollErrorDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EnrollErrorDialogComponent>, @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
