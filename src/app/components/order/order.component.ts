import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderService } from 'src/app/services/order/order.service';
import { Order } from 'src/app/model/order.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public orderForm: FormGroup;

  private dialogConfig = {
    height: '200px',
    width: '400px',
    disableClose: true,
    data: {}
  };

  // tslint:disable-next-line:max-line-length
  constructor(private dialog: MatDialog, private orderService: OrderService, private location: Location, @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      PK: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      SK: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      EntityType: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      Date: new FormControl(new Date())
    });

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.orderForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }

  public submitOrder = (orderFormValue: any) => {
    if (this.orderForm.valid) {
      this.executeOrderSubmit(orderFormValue);
    }
  }

  public executeOrderSubmit = (orderFormValue: any) => {

    const order: Order = {
      PK: orderFormValue.PK,
      SK: orderFormValue.SK,
      address: orderFormValue.address,
      EntityType: orderFormValue.EntityType,
      Date: '2020-10-10 00:00:00'
    };

    this.orderService.create(order)
      .subscribe( result => {
        console.log(result);
      }
    );

  }

}
