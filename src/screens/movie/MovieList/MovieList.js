import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {API_KEY, BASE_URL} from '../../../assets/config';
import {callMovieItem} from '../../../redux';
import GStyle from '../../GlobalStyle';
import CatagoryList from './CustomComponent/CatagoryList';
import MovieHeader from './CustomComponent/MovieHeader';
import MovieListComponent from './CustomComponent/MovieListComponent';

const MovieList = () => {
  const dispatch = useDispatch();

  const {searchText} = useSelector(state => state.movieReducer);

  useEffect(() => {
    let url = `${BASE_URL}trending/all/day?api_key=${API_KEY}&page=1`;
    dispatch(callMovieItem(url));
  }, []);

  return (
    <SafeAreaView style={GStyle.container}>
      <StatusBar
        animated={true}
        backgroundColor="#000"
        barStyle="light-content"
      />
      <MovieHeader />
      {searchText == '' ? <CatagoryList /> : null}
      <MovieListComponent />
    </SafeAreaView>
  );
};

export default MovieList;
