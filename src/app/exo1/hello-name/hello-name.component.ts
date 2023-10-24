import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-name',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 id="title" class="courier-new start">Bonjour {{ name }}</h1>

    <form>
      <label for="name">Entrez votre nom</label> :
      <input
        type="text"
        id="name"
        formControlName="name"
        #nameNew
        (keyup)="updateName(nameNew.value)"
      />
    </form>

    <form>
      <label for="police">Police : </label>
      <select
        name="police"
        id="police"
        #police
        (change)="updatePolice(police.value)"
      >
        <option value="courier-new">Courier New</option>
        <option value="franklin-gothic">Franklin Gothic Medium"</option>
        <option value="gill-sans">Gill Sans</option>
        <option value="lucida-sans">Lucida Sans</option>
      </select>
    </form>

    <form>
      <label for="size">Size</label>
      <input
        type="number"
        id="size"
        value="40"
        #size
        (change)="updateSize(size.value)"
      />
    </form>

    <form>
      <label>Text alignment : </label>

      <div>
        <input
          type="radio"
          name="text-align"
          id="left"
          value="left"
          checked
          (click)="updateAlignment(left.value)"
          #left
        />
        <label for="left">Left</label>
      </div>
      <div>
        <input
          type="radio"
          name="text-align"
          id="center"
          value="center"
          (click)="updateAlignment(center.value)"
          #center
        />
        <label for="center">Center</label>
      </div>
      <div>
        <input
          type="radio"
          name="text-align"
          id="right"
          value="right"
          (click)="updateAlignment(right.value)"
          #right
        />
        <label for="right">Right</label>
      </div>
    </form>
  `,
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
