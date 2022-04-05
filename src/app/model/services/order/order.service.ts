import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Order } from '../../order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  apiUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { this.apiUrl = baseUrl; }

  public getOrder(id: string): Observable<Order> {
    return this.http.get<Order>(this.apiUrl + `/orders/${id}`);
  }

  public create(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl + '/orders', order, this.httpOptions);
  }

  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl + '/orders');
  }

  public searchOrders(term: string): Observable<Order[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Order[]>(`${this.apiUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
          console.log('Found orders matching ${term}') :
          console.log('No orders matching ${term}'))
    );
  }
}
