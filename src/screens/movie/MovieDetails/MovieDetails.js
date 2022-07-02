import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {View, ScrollView, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  callItemDetails,
  callItemRelatedMovies,
  setMovieDetails,
  setRelatedMovies,
  toggleRelatedLoader,
} from '../../../redux';
import GStyle from '../../GlobalStyle';
import DetailsDescription from './CustomComponent/DetailsDescription';
import DetailsHeader from './CustomComponent/DetailsHeader';
import DetailsMetaDta from './CustomComponent/DetailsMetaData';
import DetailsRelatedMovie from './CustomComponent/DetailsRelatedMovie';

const MovieDetails = ({route}) => {
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      if (isActive) {
        let itemId = route?.params?.item?.id;

        if (!!itemId) {
          dispatch(callItemDetails(itemId));
          dispatch(callItemRelatedMovies(itemId));
        } else {
          console.log('item id not available');
        }
      }

      return () => {
        dispatch(setMovieDetails(null));
        dispatch(setRelatedMovies([]));
        dispatch(toggleRelatedLoader(true));
        isActive = false;
      };
    }, []),
  );

  return (
    <View style={GStyle.container}>
      <StatusBar
        animated={true}
        backgroundColor="#000"
        barStyle="light-content"
      />
      <DetailsHeader movie={route?.params?.item} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <DetailsMetaDta movie={route?.params?.item} />
        <DetailsDescription movie={route?.params?.item} />
        <DetailsRelatedMovie />
      </ScrollView>
    </View>
  );
};

export default MovieDetails;
