import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import Details from '../screens/home/Details';

const LoggedStack = () => {
  const Logged = createNativeStackNavigator();
  return (
    <Logged.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="home">
      <Logged.Screen name="home" component={Home} />
      <Logged.Screen name="details" component={Details} />
    </Logged.Navigator>
  );
};

export default LoggedStack;
