import { Component, Input, inject } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-tansaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction.component.html',
})
export class TransactionComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  transactionService: TransactionService = inject(TransactionService);

  // init transaction
  transaction: Transaction = {} as Transaction;

  constructor() {
    const transactionId = this.route.snapshot.params['id'];
    this.transactionService
      .getTransaction(transactionId)
      .subscribe((transaction) => {
        this.transaction = transaction as Transaction;
        this.transaction.date = formatDate(
          transaction.date,
          'dd/MM/yyyy',
          'fr-FR'
        );
      });
  }
}
