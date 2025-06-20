import { Component, ViewEncapsulation } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { Router } from '@angular/router';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class Tab1Page {
  constructor(
    private pokeService: PokeService, 
    private dadosService: DadosService,
    private router: Router)
    {}
  
  nomePokemon: string = '';
  pokemon: any = null;
  pokemonDadosCompleto: any = null;
  
  procurarPokemon() {
    const nome = this.nomePokemon.trim().toLowerCase();
    
    if(!nome) {
      console.log('vazio');
      return;
    }

    this.pokeService.buscarPokemon(nome).subscribe({
      next: (res) => {
        this.pokemonDadosCompleto = res;
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

  irParaTab2() {
    if(this.pokemon) {
      this.dadosService.setDados(this.pokemonDadosCompleto);
      this.router.navigate(['/tabs/tab2'], {
        state: {
          dadosPokemon: this.pokemonDadosCompleto
        }
      });
    }
  }
}
