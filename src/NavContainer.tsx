import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MovieStack from './navigationStack/MovieStack';

const NavContainer = () => {
  return (
    <NavigationContainer>
      <MovieStack />
    </NavigationContainer>
  );
};

export default NavContainer;
