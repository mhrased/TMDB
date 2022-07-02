import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {COLOR, EN, INAME, SIZES} from '../../../../assets/config';
import {searchMovieItems} from '../../../../redux';
import GStyle from '../../../GlobalStyle';

const MovieHeader = () => {
  const dispatch = useDispatch();
  const {searchText} = useSelector(state => state.movieReducer);
  return (
    <View style={GStyle.mlheadingWrapper}>
      <Text style={GStyle.mlHeaderText}>{EN.headingText}</Text>

      <View style={{marginVertical: 15}}>
        <TextInput
          defaultValue={searchText}
          style={GStyle.mlSearch}
          placeholderTextColor="#aaa"
          onChangeText={t => dispatch(searchMovieItems(t))}
          placeholder={EN.searchPlaceholder}
        />
        <View style={GStyle.searchIcon}>
          <Ionicons
            name={INAME.search}
            size={SIZES.regular * 2}
            color={COLOR._textColor}
          />
        </View>
      </View>
    </View>
  );
};

export default MovieHeader;
