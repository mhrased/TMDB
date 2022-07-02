import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';

const AuthStack = () => {
  const Auth = createNativeStackNavigator();
  return (
    <Auth.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="signin">
      <Auth.Screen name="signin" component={SignIn} />
      <Auth.Screen name="signup" component={SignUp} />
    </Auth.Navigator>
  );
};

export default AuthStack;
