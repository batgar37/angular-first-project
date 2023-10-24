import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calcul } from '../calcul';
import { CalculatorService } from '../calculator.service';
import { CalculComponent } from '../calcul/calcul.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  template: `
    <section style="margin-top: 50px;">
      <form>
        <input type="number" name="first-number" #firstNumber />
        <select name="operator" id="operator" #operator>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="x">x</option>
        </select>
        <input type="number" name="second-number" #secondNumber />
        <button
          type="button"
          (click)="
            calcul(firstNumber.value, operator.value, secondNumber.value)
          "
        >
          Save
        </button>
      </form>
    </section>
    <ul>
      <app-calcul *ngFor="let calcul of calculList" [calcul]="calcul" />
    </ul>
  `,
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
