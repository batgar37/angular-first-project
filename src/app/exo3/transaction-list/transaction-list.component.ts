import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSortModule, Sort, MatSort } from '@angular/material/sort';
import { TransactionDataSource } from '../transaction.dataSource';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule],
  providers: [TransactionDataSource],
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
})
export class TransactionListComponent implements OnInit {
  constructor(private transactionService: TransactionService) {}

  /**
   * Control column ordering and which columns are displayed.
   */
  columnsToDisplay: string[] = ['id', 'amount', 'balance', 'label', 'date'];

  dataSource: TransactionDataSource = new TransactionDataSource(
    this.transactionService
  );

  ngOnInit() {
    this.dataSource.loadTransaction({ active: 'id', direction: 'asc' });
  }

  sortTransactions(sort: Sort): void {
    this.dataSource.loadTransaction(sort);
  }

  log() {
    console.log('click');
  }
}
