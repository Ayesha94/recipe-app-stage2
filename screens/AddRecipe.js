import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import DropDownPicker from 'react-native-dropdown-picker'
import { TextInput } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
let customFonts = {
  BalimonFont: require('../assets/Balimoon-Regular.otf'),
}
export class AddRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false,
      previewImage: 'image_3',
      title: '',
      authorName: '',
      recipeDescription: '',
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
      let preview_images = {
        image_1: require('../assets/recipe_1.jpg'),
        image_2: require('../assets/recipe_2.jpg'),
        image_3: require('../assets/recipe_3.jpg'),
        image_4: require('../assets/recipe_4.jpg'),
        image_5: require('../assets/recipe_5.jpg'),
        image_6: require('../assets/recipe_6.jpg'),
        image_7: require('../assets/recipe_7.jpg'),
      }

      return (
        <View>
          <Text style={{ fontFamily: 'BalimonFont', fontSize: 40 }}>
            Add Recipe Screen
          </Text>
          <Image
            source={preview_images[this.state.previewImage]}
            style={{ width: '93%', height: 250 }}
          />
          <DropDownPicker
            items={[
              { label: 'Image 1', value: 'image_1' },
              { label: 'Image 2', value: 'image_2' },
              { label: 'Image 3', value: 'image_3' },
              { label: 'Image 4', value: 'image_4' },
              { label: 'Image 5', value: 'image_5' },
              { label: 'Image 6', value: 'image_6' },
              { label: 'Image 7', value: 'image_7' },
            ]}
            labelStyle={{
              color: 'red',
              fontFamily: 'BalimonFont',
            }}
            onChangeItem={(item) => {
              this.setState({
                previewImage: item.value,
              })
            }}
            containerStyle={{
              height: 40,
              marginBottom: 10,
              borderRadius: 40,
            }}
            arrowColor="#fff"
            defaultValue={this.state.previewImage}
            style={{ backgroundColor: 'red', color: 'red' }}
            disabledStyle={{
              opacity: 0.5,
            }}
            textStyle={{
              fontSize: 15,
              fontWeight: 'bold',
            }}
            labelStyle={{
              fontWeight: 'bold',
            }}
            dropDownStyle={{ backgroundColor: 'red', color: 'pink' }}
          />
          <ScrollView>
            <TextInput
              placeholder={'Name of Recipe'}
              placeholderTextColor={'black'}
              style={[styles.inputText, { marginTop: RFValue(5) }]}
              onChangeText={() => {
                this.setState({
                  title,
                })
              }}
            />
            <TextInput
              placeholder={'Author Name'}
              placeholderTextColor={'black'}
              style={[styles.inputText, { marginTop: RFValue(5) }]}
              onChangeText={(authorName) => {
                this.setState({
                  authorName,
                })
              }}
            />
            <TextInput
              multiline={true}
              placeholder={'Recipe'}
              placeholderTextColor={'black'}
              style={[styles.inputText, { marginTop: RFValue(5), height: 25 }]}
              onChangeText={(recipeDescription) => {
                this.setState({
                  recipeDescription,
                })
              }}
            />
          </ScrollView>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  inputText: {
    color: 'black',
    fontWeight: 'bold',
    borderRadius: '20',
    borderWidth: 2,
  },
})
export default AddRecipe
