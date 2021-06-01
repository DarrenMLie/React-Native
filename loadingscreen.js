import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

// app loading screen for persistor (order: 1)
export default class LoadingScreen extends React.Component {
    render() {
      return (
        <View style={styles.loadingscreen}>
          <Image style={styles.loadinglogo} source={require("./assets/PipeSplash.png")}/>
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
        resizeMode: 'center'
    }
  })