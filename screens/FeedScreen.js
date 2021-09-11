import React, { Component } from 'react'
import { Text, View } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import RecipeCard from './RecipeCard'
let recipe = require('./temp-recipes.json')
import { RFValue } from 'react-native-responsive-fontsize'
let customFonts = {
  BalimonFont: require('../assets/Balimoon-Regular.otf'),
}
export class FeedScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false,
    }
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts)
    this.setState({ fontsLoaded: true })
  }
  componentDidMount() {
    this._loadFontsAsync()
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />
    } else {
      return (
        <View>
          <Text style={{ fontFamily: 'BalimonFont', fontSize: RFValue(40) }}>
            {' '}
            Feed Screen
          </Text>
        </View>
      )
    }
  }
}

export default FeedScreen
