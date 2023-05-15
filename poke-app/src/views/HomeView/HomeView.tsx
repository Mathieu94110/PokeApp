import React, { useEffect, useState } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import { getPokemons } from 'src/api/pokeApi'
import { pokemonData } from 'src/types/pokemons.interface'

const HomeView = (props) => {
  const [pokemons, setPokemons] = useState<pokemonData[]>([])
  const [searchfeild, setSearchfeild] = useState('')

  useEffect(() => {
    fetchPokemons()
  }, [])

  const fetchPokemons = async () => {
    const data = await getPokemons()
    const pokemons = await data.results
    setPokemons(pokemons)
  }

  return (
    <View>
      <View style={styles.searchCont}>
        <TextInput
          style={styles.searchfeild}
          placeholder="Search Pokemons"
          onChangeText={(value) => setSearchfeild(value)}
          value={searchfeild}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          {pokemons
            .filter((pokemon) => pokemon.name.toLowerCase().includes(searchfeild.toLowerCase()))
            .map((pokemon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.card}
                  onPress={() =>
                    props.navigation.navigate('Details', {
                      pokemon: pokemon.name
                    })
                  }
                >
                  <Image
                    style={{ width: 150, height: 150 }}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`
                    }}
                  />
                  <Text>{pokemon.name}</Text>
                </TouchableOpacity>
              )
            })}
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeView

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 30
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 20,
    marginVertical: 10
  },
  searchCont: {
    position: 'absolute',
    marginBottom: 70,
    left: '20%',
    zIndex: 1,
    marginTop: 10
  },
  searchfeild: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    width: 250,
    borderRadius: 50
  }
})
