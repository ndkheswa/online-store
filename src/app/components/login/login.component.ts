import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginDto, User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { SuccessDialogComponent } from '../shared/success-dialog/success-dialog.component';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthStatusService } from 'src/app/services/auth-status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  private dialogConfig;
  errorService: any;
  returnUrl: string;
  error = '';
  loading = false;

  constructor(private authStatus: AuthStatusService , private route: ActivatedRoute, private router: Router ,private userService: UserService, private dialogRef: MatDialogRef<SuccessDialogComponent>,
              private dialog: MatDialog, private location: Location, @Inject(MAT_DIALOG_DATA) public data: any) {
                if (this.userService.currentUserValue) {
                  this.router.navigate(['learner-dashboard']);
                }
              }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    };
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'learner-dashboard';
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }

  public loginClient = (loginFormValue) => {
    if (this.loginForm.valid) {
      this.login(loginFormValue);
    }
  }

  public login = (loginFormValue) => {
    this.loading = true;
    const loginDto: LoginDto = {
      name: loginFormValue.name,
      password: loginFormValue.password
    };

    this.userService.login(loginDto)
      .subscribe(data => {
        this.loading  = false;
        this.router.navigateByUrl(this.returnUrl);
      },
        (error => {
          //this.errorService.dialogConfig = { ...this.dialogConfig };
          //this.errorService.handleError(error);
          console.log(error);
          this.error = error;
          this.loading  = false;
        })
      );
  }

}
