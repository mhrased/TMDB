import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieList from '../screens/movie/MovieList/MovieList';
import MovieDetails from '../screens/movie/MovieDetails/MovieDetails';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLOR } from '../assets/config';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/profile';
import { StackActions } from '@react-navigation/native';

const resetTabStacksOnBlur = ({navigation} : any) => ({
  blur: () => {
    const state = navigation.getState();

    state.routes.forEach((route : {state : {index : number}}, tabIndex : number) => {
      if (state?.index !== tabIndex && route.state?.index > 0) {
        navigation.dispatch(StackActions.popToTop());
      }
    });
  },
});

const MovieTab = () =>{
  const Movie = createNativeStackNavigator();
  return (
    <Movie.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="movieList">
      <Movie.Screen name="movieList" component={MovieList} />
      <Movie.Screen name="details" component={MovieDetails} />
    </Movie.Navigator>
  )
}

const MovieStack = () => {

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName='movieTab' screenOptions={({ route }) => ({
      headerShown: false,
      showLabel: false,
      tabBarStyle: {
        backgroundColor: COLOR._bgColor,
        height: 65,
      },
      tabBarLabelStyle: {fontSize: 0},
      tabBarIcon: ({  color }) => {
        let iconName;

        if (route.name === 'home') {
          iconName = 'home-filled'
        }else if (route.name === 'movieTab') {
          iconName = 'play-circle-filled';
        }else if (route.name === 'profile') {
          iconName = 'person';
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={35} color={color} />;
      },
      tabBarActiveTintColor: 'salmon',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen listeners={resetTabStacksOnBlur} name="movieTab" component={MovieTab} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MovieStack;
