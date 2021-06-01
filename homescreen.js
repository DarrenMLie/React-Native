import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'

import Browse from './browse'
import Favorites from './favorites'

// create bottom tab navigator
const Tab = createBottomTabNavigator()

// home screen component (type: stack, order: 2)
export default class HomeScreen extends React.Component {
    render() {
        return (
            <Tab.Navigator tabBarOptions={{activeTintColor: '#1377E9', inactiveTintColor: 'gray'}} screenOptions={({route}) => ({tabBarIcon: ({focused, size, color}) => {
                let iconName
                if (route.name === 'Browse') iconName = 'search'
                if (route.name === 'Favorites') iconName = focused ? 'star' : 'star-o'
                return <FontAwesome name={iconName} size={size} color={color} />
            }})}>
                <Tab.Screen name='Browse' component={Browse}/>
                <Tab.Screen name='Favorites' component={Favorites}/>
            </Tab.Navigator>
        )
    }
}