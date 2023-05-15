import { pokemonApiResults, pokemonBasicInfos } from 'src/types/pokemons.interface'

export async function getPokemons(): Promise<pokemonApiResults> {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    return response.json()
  } catch (error) {
    throw error
  }
}

export async function getPokemonDetails(pokemon: string): Promise<pokemonBasicInfos> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    return response.json()
  } catch (error) {
    throw error
  }
}
