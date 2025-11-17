import fetch from 'node-fetch';
import { Pokemon } from '../../types/pokemon.js';

const base = 'https://pokeapi.co/api/v2';

export class PokemonOutboundService {
  async fetchPokemon(name: string): Promise<Pokemon> {
    const res = await fetch(`${base}/pokemon/${encodeURIComponent(name.toLowerCase())}`);
    if (!res.ok) throw new Error(`Pokemon not found: ${name}`);
    return res.json() as Promise<Pokemon>;
  }
}

export function formatBasic(p: Pokemon) {
  const types = p.types?.map((t) => t.type.name) ?? [];
  return {
    name: p.name,
    height: p.height,
    weight: p.weight,
    types,
    image: `https://img.pokemondb.net/artwork/${p.name.toLowerCase()}.jpg`
  };
}
