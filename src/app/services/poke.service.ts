import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  private cache: Map<string, any> = new Map();

  constructor(private http: HttpClient) { }

  buscarPokemon(nome: string): Observable<any> {
    const nomeLower = nome.toLowerCase();

    if(this.cache.has(nomeLower)) {
      return of(this.cache.get(nomeLower));
    }

    const cacheLocal = this.buscarNoCacheLocal(nomeLower);
    if(cacheLocal) {
      this.cache.set(nomeLower, cacheLocal);
      return of(cacheLocal);
    }

    return this.http.get(`${this.baseUrl}/${nomeLower}`).pipe(
      tap(dados => {
        this.cache.set(nomeLower, dados);
        this.salvarEmCacheLocal(dados);
      })
    );
  }

  getUltimosPokemons(): any[] {
    const dados = localStorage.getItem('ultimosPokemons');
    return dados ? JSON.parse(dados) : [];
  }

  private buscarNoCacheLocal(nome: string): any | null {
    const lista: any[] = JSON.parse(localStorage.getItem('ultimosPokemons') || '[]');
    return lista.find(p => p.name.toLowerCase() === nome) || null;
  }

  private salvarEmCacheLocal(pokemon: any) {
    const chave = 'ultimosPokemons';
    const nome = pokemon.name.toLowerCase();

    let lista: any[] = JSON.parse(localStorage.getItem(chave) || '[]');
    lista = lista.filter((p) => p.name.toLowerCase() !== nome);
    lista.unshift(pokemon);

    if(lista.length > 10) {
      lista = lista.slice(0, 10);
    }

    localStorage.setItem(chave, JSON.stringify(lista));
  }
}