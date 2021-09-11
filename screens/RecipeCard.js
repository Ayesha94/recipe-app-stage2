import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export class RecipeCard extends Component {
  render() {
    return (
      <View>
        <Image source={require('../assets/recipe-img.jpg')} />
        <Text> {this.props.recipe.recipeName} </Text>
        <Text> {this.props.recipe.duration} </Text>
        <Text> {this.props.recipe.addedBy} </Text>
      </View>
    )
  }
}

export default RecipeCard
