import { Component } from '@angular/core';
import { DadosService } from '../services/dados.service';
import { FavoritosService } from '../services/favoritos.service';
import { Utils } from '../Utilities/utils';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  dadosPokemonBruto: any = null;
  dadosPokemon: any = null;
  favorito: boolean = false;
  favoritos: any[] = [];

  constructor(
    private dadosService: DadosService,
    private favoritoService: FavoritosService,
    private utilities: Utils) { }

  // arrumando os dados na inicialização da página, se ele existir
  ionViewWillEnter() {
    this.dadosPokemonBruto = this.dadosService.getDados();
    if(this.dadosPokemonBruto) {
      this.dadosPokemon = this.utilities.mapearPokemon(this.dadosPokemonBruto);
      this.favorito = this.favoritoService.isFavorito(this.dadosPokemon.nome);
    }

    this.favoritos = this.favoritoService.getFavoritos();
  }

  alternarFavorito() {
    if(this.favorito) {
      this.favoritoService.removerFavoritos(this.dadosPokemon.nome);
      this.favoritos = this.favoritoService.getFavoritos();
    } else {
      this.favoritoService.adicionarFavorito(this.dadosPokemon);
    }
    this.favorito = !this.favorito;
  }
}