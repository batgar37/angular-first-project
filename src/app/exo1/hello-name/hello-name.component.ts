import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-name',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello-name.component.html',
  styleUrls: ['./hello-name.component.css'],
})
export class HelloNameComponent {
  name: string = '';
  policeTitle = 'courier-new';

  updateName(name: string) {
    this.name = name.toUpperCase();
  }

  updatePolice(police: string) {
    let title = document.getElementsByTagName('h1')[0];
    title.classList.replace(this.policeTitle, police);
    this.policeTitle = police;
  }

  updateSize(size: string) {
    let title = document.getElementsByTagName('h1')[0];
    title.style.fontSize = size + 'px';
  }

  updateAlignment(alignment: string) {
    let title = document.getElementsByTagName('h1')[0];
    title.style.textAlign = alignment;
  }
}
