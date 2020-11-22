import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Pipe from './pipe'
import LoadingScreen from './loadingscreen'
import { store, persistor } from './redux/store'

// main app export function (order: 0)
export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer style={styles.container}>
          <PersistGate loading={<LoadingScreen/>} persistor={persistor}>
            <Pipe />
          </PersistGate>
        </NavigationContainer>
    </Provider>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
