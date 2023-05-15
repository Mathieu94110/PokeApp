export interface pokemonApiResults {
  count: number
  next: string | null
  previous: string | null
  results: pokemonData[]
}

export type pokemonData = {
  name: string
  url: string
}
export type pokemonBasicInfos = {
  name: string
  height: number
  weight: number
  abilities: pokemonAbilities[]
  types: pokemonTypes[]
}

export type pokemonAbilities = {
  ability: pokemonAbility
}

export type pokemonAbility = {
  name: string
}
export type pokemonTypes = {
  type: pokemonType
}
export type pokemonType = {
  name: string
}
