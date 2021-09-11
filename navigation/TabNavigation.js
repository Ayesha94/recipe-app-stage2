import * as React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FeedScreen from '../screens/FeedScreen'
import AddRecipe from '../screens/AddRecipe'

const Tab = createMaterialBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Feed') {
            iconName = focused ? 'fast-food' : 'fast-food-outline'
          } else if (route.name === 'Add Recipe') {
            iconName = focused ? 'add-circle' : 'add-circle-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Add Recipe" component={AddRecipe} />
      <Tab.Screen name="Feed" component={FeedScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
