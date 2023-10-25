import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calcul } from '../calcul';
import { CalculatorService } from '../calculator.service';
import { CalculComponent } from '../calcul/calcul.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  imports: [CommonModule, CalculComponent],
})
export class CalculatorComponent {
  calculatorService: CalculatorService = inject(CalculatorService);
  calculList: Calcul[] = this.calculatorService.getAllCalculs();

  calcul(firstNumber: string, operator: string, secondNumber: string) {
    // set string to number
    let first = Number(firstNumber);
    let second = Number(secondNumber);
    let result;

    // Make the operation needed
    switch (operator) {
      case '+':
        result = first + second;
        break;
      case '-':
        result = first - second;
        break;
      case '/':
        result = null;
        if (second !== 0) {
          result = first / second;
        }
        break;
      case 'x':
        result = first * second;
        break;
      default:
        result = null;
        break;
    }
    let operation = `${firstNumber} ${operator} ${secondNumber}`;
    this.calculatorService.addCalculToHistory(operation, result);
  }
}
