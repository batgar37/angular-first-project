import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datetime',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css'],
})
export class DatetimeComponent implements OnInit {
  public currentDateTime: Date | undefined;

  ngOnInit() {
    // Initialize the current date and time
    this.updateDateTime();

    // Update the current date and time every second
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  private updateDateTime() {
    this.currentDateTime = new Date();
  }
}
