import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Utils {
  constructor() { }

  mapearPokemon(dados: any): any {
    const sprites = dados.sprites;
    const stats = dados.stats;

    return {
        nome: dados.name,
        imagem: sprites?.other['official-artwork']?.front_default || sprites.front_default,
        imagem_shiny: sprites?.other['official-artwork']?.front_shiny || sprites.front_shiny,
        tipo: dados.types[0]?.type?.name?.trim() || 'Unknown',

        vida_label: stats[0]?.stat?.name?.toUpperCase().trim() || 'HP',
        vida: stats[0]?.base_stat || 0,

        ataque_label: stats[1]?.stat?.name?.toUpperCase().trim() || 'ATK',
        ataque: stats[1]?.base_stat || 0,

        defesa_label: stats[2]?.stat?.name?.toUpperCase().trim() || 'DEF',
        defesa: stats[2]?.base_stat || 0,

        ataque_especial_label: stats[3]?.stat?.name?.toUpperCase().trim() || 'SP.ATK',
        ataque_especial: stats[3]?.base_stat || 0,

        defesa_especial_label: stats[4]?.stat?.name?.toUpperCase().trim() || 'SP.DEF',
        defesa_especial: stats[4]?.base_stat || 0,

        velocidade_label: stats[5]?.stat?.name?.toUpperCase().trim() || 'SPD',
        velocidade: stats[5]?.base_stat || 0
    }
  }
}
