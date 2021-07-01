import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Order } from 'src/app/model/order.model';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss']
})
export class OrderSearchComponent implements OnInit {

  orders$: Observable<Order[]>;
  private searchTerms = new Subject<string>();

  constructor(private orderService: OrderService) { }

  // push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.orders$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.orderService.searchOrders(term))

    );
  }

}
