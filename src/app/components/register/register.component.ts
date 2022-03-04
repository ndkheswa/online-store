import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { SuccessDialogComponent } from '../shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  private dialogConfig;
  errorService: any;
  error = "";
  message = "";


  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<SuccessDialogComponent>,
    private dialog: MatDialog,
    private location: Location,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    }


  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fullname: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      username: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    };
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }

  // public registerClient = (registerFormValue) => {
  //   if (this.registerForm.valid) {
  //     this.register(registerFormValue);
  //   }
  // }

  public register = (registerFormValue) => {

    const user: User = {
      give_name: registerFormValue.fullname,
      family_name: registerFormValue.family_name,
      username: registerFormValue.username,
      password: registerFormValue.password
    };

    this.userService.register(user)
      .subscribe(
        data => {
          // this.dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

          this.message = `Welcome ${user.give_name}, Please check your email for confimation.`
          console.log(this.message)
          
          // this.location.go('/login');

          // this.dialogRef.afterClosed()
          // .subscribe(() => {
          //   });
        },(
          error => {
            this.error = error
            // this.errorService.dialogConfig = { ...this.dialogConfig };
            // this.errorService.handleError(error);
        }
        )
      );
  }

}
