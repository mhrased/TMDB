import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import {useNavigation} from '@react-navigation/native';
import GStyle from '../../../GlobalStyle';
import {DM, IMG_URL, COLOR} from '../../../../assets/config';
import {useDispatch, useSelector} from 'react-redux';
import {callNextPageMovies, onRefreshList} from '../../../../redux';

const MovieListComponent = () => {
  const dispatch = useDispatch();
  const {movieList, loaderMovie, loadingBottom, refreshList} = useSelector(
    state => state.movieReducer,
  );

  let navigation = useNavigation();
  const _renderItem = ({item, i}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('details', {item})}>
        <MovieCard item={item} index={i} />
      </TouchableOpacity>
    );
  };

  if (loaderMovie) {
    return (
      <View style={GStyle.loaderStyle}>
        <ActivityIndicator size="large" color={COLOR._selectedColor} />
        <Text style={{color: COLOR._textColor}}>Loading...</Text>
      </View>
    );
  } else if (!loaderMovie && movieList.lenght == 0) {
    <View style={GStyle.loaderStyle}>
      <Text style={{color: COLOR._textColor}}>Movie not found</Text>
    </View>;
  } else {
    return (
      <MasonryList
        keyExtractor={item => item.id}
        style={{marginHorizontal: 20}}
        ListHeaderComponent={<View />}
        ListFooterComponent={
          <View style={GStyle.loaderStyle}>
            <ActivityIndicator size="large" color={COLOR._selectedColor} />
          </View>
        }
        numColumns={2}
        onEndReached={() => {
          if (!loadingBottom) {
            dispatch(callNextPageMovies());
          }
        }}
        refreshing={refreshList}
        onRefresh={() => dispatch(onRefreshList())}
        data={movieList}
        renderItem={_renderItem}
      />
    );
  }
};

export default MovieListComponent;

const MovieCard = ({item, index}) => {
  return (
    <View key={item.id} style={GStyle.movieCardWrap}>
      <Image
        source={{
          uri: `${IMG_URL}${item.poster_path}`,
        }}
        style={[
          GStyle.mlImgStyle,
          {height: index % 4 == 0 || index % 4 == 3 ? 260 : 230},
        ]}
        resizeMode="cover"
      />

      <Text numberOfLines={1} style={GStyle.mlItemText}>
        {!!item.original_title ? item.original_title : item.original_name}
      </Text>
    </View>
  );
};
