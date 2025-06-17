import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) { }

  buscarPokemon(nome: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${nome.toLowerCase()}`);
  }
}
