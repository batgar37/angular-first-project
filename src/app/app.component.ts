import { Component } from '@angular/core';
import { HelloNameComponent } from './exo1/hello-name/hello-name.component';
import { CalculatorComponent } from './exo2/calculator/calculator.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HelloNameComponent,
    CalculatorComponent,
    HttpClientModule,
    NavBarComponent,
    RouterModule,
  ],
  template: ` <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">Angular Router</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="container">
        <ul class="nav navbar-nav" routerLinkActive="active">
          <li class="nav-item">
            <a class="nav-link" routerLink="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="calculator">Calculator</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="transactions">Transactions</a>
          </li>
        </ul>
      </div>
    </nav>

    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ExosAngular';
}
