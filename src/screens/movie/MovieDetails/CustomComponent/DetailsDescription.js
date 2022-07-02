//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLOR} from '../../../../assets/config';
import GStyle from '../../../GlobalStyle';

// create a component
const DetailsDescription = ({movie}) => {
  return (
    <View style={GStyle.ph20}>
      <Text style={GStyle.genreTxt}>Details</Text>
      <Text style={GStyle.detailsText}>{movie.overview}</Text>
      <TouchableOpacity>
        <Text style={{color: COLOR._textColor}}>Read more...</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

//make this component available to the app
export default DetailsDescription;
