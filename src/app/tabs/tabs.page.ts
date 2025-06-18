import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {
  constructor() {}

  temaEscuro: boolean = false;
  animarIcone: boolean = false;

  alternarTema() {
    this.temaEscuro = !this.temaEscuro;

    if(this.temaEscuro) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }

    this.animarIcone = true;
    setTimeout(() => this.animarIcone = false, 500);
  }
}
