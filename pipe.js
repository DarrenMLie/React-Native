import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './homescreen'
import VideoScreen from './videoscreen'

// create stack navigator
const Stack = createStackNavigator()

// main Pipe app component (order: 1)
export default class Pipe extends React.Component {
    render() {
        return (
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{title: 'Home', headerTitleAlign: 'center'}}/>
                <Stack.Screen name='VideoScreen' component={VideoScreen} options={{title: 'Video', headerTitleAlign: 'center'}}/>
            </Stack.Navigator>
        )
    }
}