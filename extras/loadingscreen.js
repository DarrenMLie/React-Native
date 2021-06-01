import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

// app loading screen for persistor (order: 1)
export default class LoadingScreen extends React.Component {
    render() {
      return (
        <View style={styles.loadingscreen}>
          <Text style={styles.loadinglogo}>PIPE</Text>
        </View>
      )
    }
  }

  // styles
const styles = StyleSheet.create({
    loadingscreen: {
        flex: 1, 
        backgroundColor: '#1377E9', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    loadinglogo: {
        color: 'white', 
        fontSize: 50, 
        textShadowColor: 'black', 
        textShadowOffset: {width: 9, height: 5}, 
        textShadowRadius: 5, 
        fontFamily: 'monospace'
    }
  })