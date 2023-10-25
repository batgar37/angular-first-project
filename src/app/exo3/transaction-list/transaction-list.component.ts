import { Component, LOCALE_ID, inject } from '@angular/core';
import { Sort, MatSortModule } from '@angular/material/sort';
import { NgFor, formatDate } from '@angular/common';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';
import { RouterModule } from '@angular/router';

/**
 * @title Sorting overview
 */
@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  standalone: true,
  imports: [MatSortModule, NgFor, RouterModule],
})
export class TransactionListComponent {
  transactionService: TransactionService = inject(TransactionService);
  transactions: Transaction[] = [];

  sortedData: Transaction[];

  constructor() {
    this.sortedData = [];
    // Getting all transaction and format the date
    this.transactionService.getAllTransactions().subscribe((transactions) => {
      this.transactions = transactions as Transaction[];
      this.transactions.map((transaction) => {
        return (transaction.date = formatDate(
          transaction.date,
          'dd/MM/yyyy',
          'fr-FR'
        ));
      });
      this.sortedData = this.transactions.slice();
    });
  }

  sortData(sort: Sort) {
    const data = this.transactions.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'amount':
          return compare(a.amount, b.amount, isAsc);
        case 'balance':
          return compare(a.balance, b.balance, isAsc);
        case 'label':
          return compare(a.label, b.label, isAsc);
        case 'date':
          return compareDate(a.date, b.date, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compareDate(a: string, b: string, isAsc: boolean) {
  a = a.split('/').reverse().join('');
  b = b.split('/').reverse().join('');
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
