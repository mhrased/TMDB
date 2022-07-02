//import liraries
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR, IMG_URL} from '../../../../assets/config';
import GStyle from '../../../GlobalStyle';

// create a component
const DetailsHeader = ({movie}) => {
  const navigation = useNavigation();
  return (
    <View style={GStyle.itemCenterize}>
      <Image
        source={{
          uri: `${IMG_URL}${movie.poster_path}`,
        }}
        style={GStyle.bannerStyle}
      />
      <TouchableOpacity style={styles.playStyle}>
        <Icon name="play" size={40} color="rgba(255,0,0,.7)" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtnStyle}>
        <Icon name="chevron-back-outline" size={36} color={COLOR._bgColor} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  playStyle: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,.5)',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70 / 2,
  },
  backBtnStyle: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,.8)',
    width: 55,
    height: 55,
    top: 20,
    left: 20,
    borderRadius: 55 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default DetailsHeader;
