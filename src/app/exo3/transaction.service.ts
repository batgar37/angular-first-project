import { Injectable, inject } from '@angular/core';
import { Transaction } from './transaction';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Sort } from '@angular/material/sort';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  readonly transactionUrl = '/assets/data/transactions.json';

  constructor(private http: HttpClient) {}

  getAllTransaction(sort: Sort): Observable<Transaction[]> {
    const params = new HttpParams()
      .set('_sort', sort.active)
      .set('_order', sort.direction);
    return this.http.get<Transaction[]>(this.transactionUrl, { params });
  }
}
