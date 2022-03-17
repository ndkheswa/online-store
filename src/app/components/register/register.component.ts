import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { RegisterSuccessComponent } from '../shared/register-success/register-success.component';
import { SuccessDialogComponent } from '../shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  private dialogConfig = new MatDialogConfig();

  constructor(private userService: UserService, private router: Router,
              private dialog: MatDialog, private location: Location) {}

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

  public registerClient = (registerFormValue) => {
    if (this.registerForm.valid) {
      this.register(registerFormValue);
    }
  }

  public register = (registerFormValue) => {

    const user: User = {
      username: registerFormValue.username,
      email: registerFormValue.username,
      given_name: registerFormValue.fullname,
      family_name: registerFormValue.fullname,
      name: registerFormValue.fullname,
      password: registerFormValue.password
    };

    this.userService.register(user)
      .subscribe(
        data => {
          const dialogRef = this.dialog.open(RegisterSuccessComponent, this.dialogConfig);
          console.log(data);

          dialogRef.afterClosed()
            .subscribe(() => {
              //this.location.go('/login');
              this.router.navigate(['/login']);
            });
        },
        (error => {
          console.log(error);
          //this.errorService.handleError(error);
        })
      );
  }

}
