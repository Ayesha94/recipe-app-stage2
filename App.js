import React, { Component } from 'react'
import DrawerNavigator from './navigation/DrawerNavigation'
import { NavigationContainer } from '@react-navigation/native'

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    )
  }
}

export default App
