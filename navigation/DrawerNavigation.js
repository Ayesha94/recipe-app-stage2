import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNavigator from './TabNavigation'
import BreakFast from '../screens/BreakFast'
import Lunch from '../screens/Lunch'
import Dinner from '../screens/Dinner'
import Snacks from '../screens/Snacks'
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Breakfast Recipes" component={BreakFast} />
      <Drawer.Screen name="Lunch Recipes" component={Lunch} />
      <Drawer.Screen name="Dinner Recipes" component={Dinner} />
      <Drawer.Screen name="Snack Recipes" component={Snacks} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
