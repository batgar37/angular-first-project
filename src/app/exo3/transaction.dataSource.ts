import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';
import { Sort } from '@angular/material/sort';

@Injectable()
export class TransactionDataSource extends DataSource<Transaction> {
  transaction$ = new BehaviorSubject<Transaction[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private transactionService: TransactionService) {
    super();
  }

  connect(): Observable<Transaction[]> {
    return this.transaction$.asObservable();
  }

  disconnect(): void {
    this.transaction$.complete();
  }

  loadTransaction(sort: Sort): void {
    this.isLoading$.next(true);
    this.transactionService.getAllTransaction(sort).subscribe((transaction) => {
      this.transaction$.next(transaction);
      this.isLoading$.next(false);
    });
    console.log(this.transaction$);
  }
}
