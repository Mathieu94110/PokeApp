import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'

import { getPokemonDetails } from 'src/api/pokeApi'
import { pokemonBasicInfos } from 'src/types/pokemons.interface'

const Details = (props) => {
  const [details, setDetails] = useState<pokemonBasicInfos | undefined>(undefined)

  useEffect(() => {
    fetchPokemonDetails()
  }, [])

  const fetchPokemonDetails = async () => {
    const { state } = props.navigation
    const pokemonDetails = await getPokemonDetails(state.params.pokemon)
    setDetails(pokemonDetails)
  }

  return details?.name ? (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image
        style={styles.image}
        source={{
          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${details.name}.png`
        }}
      />
      <Text style={styles.text}>Name: {details.name}</Text>
      <Text style={styles.text}>Height: {details.height}</Text>
      <Text style={styles.text}>Weight: {details.weight}</Text>
      <Text style={styles.text}>Ability: {details.abilities[0].ability.name}</Text>
      <Text style={styles.text}>Type: {details.types[0].type.name}</Text>
    </View>
  ) : (
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color="#E63F34" />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  },
  text: {
    fontSize: 22,
    marginBottom: 15
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
