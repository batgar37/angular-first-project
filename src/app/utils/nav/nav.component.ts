import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimeComponent } from '../datetime/datetime.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, DatetimeComponent, MdbCollapseModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {}
