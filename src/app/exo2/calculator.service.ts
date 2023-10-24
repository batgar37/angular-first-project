import { Injectable } from '@angular/core';
import { Calcul } from './calcul';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  // initialize history
  calculatorHistory: Calcul[] = [];

  addCalculToHistory(operation: string, result: number | null) {
    this.calculatorHistory.push({
      id: uuidv4(),
      date: new Date(),
      operation,
      result,
    });
  }

  removeCalculFromHistory(id: string) {
    const index = this.calculatorHistory.findIndex(
      (calcul) => calcul.id === id
    );
    this.calculatorHistory.splice(index, 1);
  }

  getAllCalculs(): Calcul[] {
    return this.calculatorHistory;
  }

  constructor() {}
}
