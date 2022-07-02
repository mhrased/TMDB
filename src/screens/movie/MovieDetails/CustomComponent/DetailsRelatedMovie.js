//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import {COLOR, DM, IMG_URL} from '../../../../assets/config';
import GStyle from '../../../GlobalStyle';

// create a component
const DetailsRelatedMovie = () => {
  const {relatedMovie, relatedMovieLoader} = useSelector(
    state => state.movieReducer,
  );
  const _renderItem = ({item, index}) => {
    return (
      <View style={GStyle.relatedImgWrap}>
        <Image
          source={{
            uri: `${IMG_URL}${item.poster_path}`,
          }}
          style={GStyle.relatedImg}
        />
        <Text numberOfLines={2} style={GStyle.relatedImgText}>
          {!!item.original_title ? item.original_title : item.original_name}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={GStyle.releaseText}>Related Movies</Text>
      {relatedMovieLoader ? (
        <View style={GStyle.loaderStyle}>
          <ActivityIndicator size="large" color={COLOR._selectedColor} />
        </View>
      ) : (
        <FlatList
          data={relatedMovie}
          horizontal
          ListEmptyComponent={() => {
            return (
              <View style={GStyle.loaderStyle}>
                <Text style={{color: COLOR._textColor}}>
                  No related movie found
                </Text>
              </View>
            );
          }}
          showsHorizontalScrollIndicator={false}
          key={(item, index) => `related-${index}`}
          renderItem={_renderItem}
        />
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {padding: 20},
});

//make this component available to the app
export default DetailsRelatedMovie;
