import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  nomePokemon: string = '';
  
  procurarPokemon() {
    if(!this.nomePokemon.trim()) {
      console.log('digite um nome');
      return;
    }

    const nome = this.nomePokemon.trim().toLowerCase();
    console.log('procurando:', nome);

    // call service
  }
}
