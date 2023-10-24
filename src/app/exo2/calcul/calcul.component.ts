import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calcul } from '../calcul';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calcul',
  standalone: true,
  imports: [CommonModule],
  template: `
    <li>
      {{ calcul.date.getHours() }} : {{ calcul.date.getMinutes() }} :
      {{ calcul.date.getSeconds() }} >> {{ calcul.operation }} =
      {{ calcul.result }}
      <button type="button" (click)="deleteCalcul(calcul.id)">Delete</button>
    </li>
  `,
  styleUrls: ['./calcul.component.css'],
})
export class CalculComponent {
  @Input() calcul!: Calcul;
  calculatorService: CalculatorService = inject(CalculatorService);

  deleteCalcul(id: string) {
    this.calculatorService.removeCalculFromHistory(id);
  }
}
