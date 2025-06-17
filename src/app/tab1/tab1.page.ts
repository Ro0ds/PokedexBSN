import { Component, ViewEncapsulation } from '@angular/core';
import { PokeService } from '../services/poke.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class Tab1Page {
  constructor(private pokeService: PokeService) {}
  
  nomePokemon: string = '';
  pokemon: any = null;
  temaEscuro: boolean = false;
  animarIcone: boolean = false;
  
  procurarPokemon() {
    const nome = this.nomePokemon.trim().toLowerCase();
    
    if(!nome) {
      console.log('vazio');
      return;
    }

    this.pokeService.buscarPokemon(nome).subscribe({
      next: (res) => {
        console.log('dados temp do pokemon:', res);
        this.pokemon = {
          nome: res.name,
          imagem: res.sprites?.other['official-artwork']?.front_default || res.sprites.front_default
        };
      },
      error: (err) => {
        console.error('pokemon nao encontrado:', err);
        this.pokemon = null;
      }
    })
  }

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
