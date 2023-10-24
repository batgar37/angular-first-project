import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HelloNameComponent } from '../exo1/hello-name/hello-name.component';
import { CalculatorComponent } from '../exo2/calculator/calculator.component';
import { TransactionListComponent } from '../exo3/transaction-list/transaction-list.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    HelloNameComponent,
    CalculatorComponent,
    TransactionListComponent,
  ],
  templateUrl: './nav-bar.html',

  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  active = 1;
}
