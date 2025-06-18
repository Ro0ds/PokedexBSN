import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favoritos: {
    nome: string;
    imagem: string;
  }[] = [];

  constructor() {}

  adicionarFavorito(pokemon: any) {
    const existe = this.favoritos.find(p => p.nome === pokemon.nome);
    if(!existe) {
      let poke = {
        nome: pokemon.nome,
        imagem: pokemon.imagem
      }
      this.favoritos.push(poke);
    }
  }

  removerFavoritos(nome: string) {
    this.favoritos = this.favoritos.filter(p => p.nome !== nome);
  }

  getFavoritos(): any[] {
    return this.favoritos;
  }

  isFavorito(nome: string): boolean {
    return this.favoritos.some(p => p.nome === nome);
  }
}
