import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { COLOR } from './src/assets/config';
import NavContainer from './src/NavContainer';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <View style={Styles.container}>
      <StatusBar animated={true} backgroundColor={COLOR._bgColor} />
      <Provider store={store}>
        <NavContainer />
      </Provider>
    </View>
  )
};

const Styles = StyleSheet.create({
  //* Default style
  container: {
    flex: 1,
    backgroundColor: COLOR._bgColor,
  },
})

export default App;
