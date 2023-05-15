import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Details from './src/components/Details'
import HomeView from './src/views/HomeView/HomeView'

const appNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeView
    },
    Details: {
      screen: Details
    }
  },
  {
    initialRouteName: 'Home'
  }
)

const AppContainer = createAppContainer(appNavigator)

class App extends Component {
  render() {
    return <AppContainer />
  }
}

export default App
