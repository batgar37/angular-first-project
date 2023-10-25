import { Component } from '@angular/core';
import { HelloNameComponent } from './exo1/hello-name/hello-name.component';
import { CalculatorComponent } from './exo2/calculator/calculator.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { NavComponent } from './utils/nav/nav.component';

// Set local globaly
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HelloNameComponent,
    CalculatorComponent,
    NavComponent,
    HttpClientModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ExosAngular';
}
