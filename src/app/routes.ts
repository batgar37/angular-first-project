import { Routes } from '@angular/router';
import { HelloNameComponent } from './exo1/hello-name/hello-name.component';
import { CalculatorComponent } from './exo2/calculator/calculator.component';
import { TransactionListComponent } from './exo3/transaction-list/transaction-list.component';
import { TransactionComponent } from './exo3/transaction/transaction.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HelloNameComponent,
    title: 'Hello someone',
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
    title: 'Calculator',
  },
  {
    path: 'transactions',
    component: TransactionListComponent,
    title: 'Transactions',
  },
  {
    path: 'transactions/:id',
    component: TransactionComponent,
    title: 'Transaction',
  },
];

export default routeConfig;
