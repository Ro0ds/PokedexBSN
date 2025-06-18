import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private dadosPokemon: any = null;

  setDados(dados: any) {
    this.dadosPokemon = dados;
  }

  getDados() {
    return this.dadosPokemon;
  }

  limparDados() {
    this.dadosPokemon = null;
  }
}
